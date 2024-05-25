import Choose_File from '@/components/Converter_Page/Choose-File';
import OurBusiness from '@/components/Converter_Page/OurBusiness';
import Features from '@/components/Converter_Page/Features';
import HTFree from '@/components/Converter_Page/HTFree';
import ToolTips from '@/components/Converter_Page/ToolTips';
import All_Tools from '@/components/All-tools';
import Faster_Work from '@/components/Converter_Page/Faster-Work';
import ToolBlog from '@/components/Converter_Page/ToolBlog';

import Tools from '@/Tools-Data';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = () => {
    let router = useRouter();
    // console.log(router.query.tool);
    let data = Tools.find(item => item.slug === router.query?.tool?.toLowerCase());
    // console.log(data);

    return (<>
        <div className='pl-4 flex py-2'>
            <Link href="/" className='px-2 mr-1 flex items-center rounded hover:bg-gray-800 hover:text-gray-50 hover:font-semibold'>
                <svg className='h-4 mr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M14.5 7.23v7.27h-4v-3h-5v3h-4V7.23L8 1.659z"></path></svg>
                Home
            </Link>
            <span className='text-gray-500'>{" / "} {data?.title}</span>
        </div>



        {true && <Choose_File tool={router.query?.tool?.split("-").join(" ")} title={data?.title} choose_dec={data?.choose_dec} choose_list={data?.choose_list} />}

        {data?.trusted_businesses_title && <OurBusiness title={data?.trusted_businesses_title} />}

        {data?.question_with_images && <ToolTips data={data?.question_with_images} />}

        {data?.benifits && <Features data={data?.benifits} />}

        {data?.faster_work && <Faster_Work data={data?.faster_work} />}

        {data?.how_to && <HTFree data={data?.how_to} />}

        <ToolBlog></ToolBlog>
        <All_Tools></All_Tools>

    </>)
}

export default Index;