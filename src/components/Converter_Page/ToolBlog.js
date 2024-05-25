import Link from 'next/link';

const ToolBlog = () => {
    let Blogs = [
        {
            image: "https://images.ctfassets.net/l3l0sjr15nav/6WGxCLRpyocViEBT66sgSw/fd5eb8095353deb643f401bd5e500029/OCR-Online-Free-with-Smallpdf.png",
            type: "HOW TO CONVERT PDF TO WORD",
            title: "Online OCR for PDFs, Microsoft Office Files, and Images",
            details: "The Smallpdf online OCR converter can help you convert and process various file types to an editable document.",
        },
        {
            image: "https://images.ctfassets.net/l3l0sjr15nav/6JNsilinEziFn1QYHQna8r/36b8e09c2bfd3b653c801513db3d662e/PDF2Word-blog-banner-Smallpdf.jpg",
            type: "HOW TO CONVERT PDF TO WORD",
            title: "PDF2WORD—Convert PDF to Word Online for Free",
            details: "You can use our PDF2WORD tool to save PDF documents into editable Word files seamlessly. Our online tool can process both scans and files created digitally.",
        },
        {
            image: "https://images.ctfassets.net/l3l0sjr15nav/2nmmSqN1RDaGuH19u8eGCu/4fe081186a1b8ab0f298e1681e2b9f21/how_to_search_a_pdf_2x-min.png?w=2000",
            type: "HOW TO CONVERT PDF TO WORD",
            title: "How to Make a PDF Searchable Online with OCR",
            details: "Online tool to convert and extract text into searchable content within PDF files for free. No software download is needed.",
        },
        {
            image: "https://images.ctfassets.net/l3l0sjr15nav/M9tTSzUdcO0KKQc24aUQK/7fb9b0300e967faadb2353896aa53973/PDF_to_Word_Blog_Banner-min.png?w=2000",
            type: "HOW TO CONVERT PDF TO WORD",
            title: "Convert PDF to Word on Mac for Free",
            details: "Quickly convert PDF files into editable Word documents on your Macbook for free, online, or offline. No registration is required for the conversion.",
        },
        {
            image: "https://images.ctfassets.net/l3l0sjr15nav/6Y8OwKjsTCq4gKOmekQIE2/ba3167180b7f5891c4ca5d4021c9ad47/pdf-to-text-free-online-tool-to-convert-pdf-to-txt_2x-min.png?w=2000",
            type: "HOW TO CONVERT PDF TO WORD",
            title: "How To Insert PDF Into Word",
            details: "The easiest ways to insert a PDF into Word, either as an image or in an editable format, online or offline.",
        },
        {
            image: "https://images.ctfassets.net/l3l0sjr15nav/6Y8OwKjsTCq4gKOmekQIE2/ba3167180b7f5891c4ca5d4021c9ad47/pdf-to-text-free-online-tool-to-convert-pdf-to-txt_2x-min.png?w=2000",
            type: "HOW TO CONVERT PDF TO WORD",
            title: "PDF to Text - Convert PDF to Text Online for Free",
            details: "Use Smallpdf's free online converter to save a PDF into an editable text file. No signup is required.",
        },
    ]
    return (
        <section>
            <div className='py-10 px-0'>
                <h2 className='font-bold text-2xl text-center pb-12'>
                    PDF to Word Blog Articles
                </h2>
                <div className='max-w-screen-xl py-4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        Blogs.map((Blog, indx) => {
                            return (
                                <div key={indx} className='px-4 pb-12 '>
                                    <Link
                                        href="#"
                                    >
                                        <div className='overflow-hidden h-40 pb-3 cursor-pointer'>
                                            <img
                                                className='object-cover h-full cursor-pointer'
                                                loading='lazy'
                                                src={Blog.image}
                                                alt={Blog.title}
                                            />
                                        </div>
                                    </Link>
                                    <Link href="#" className='no-underline hover:underline '>
                                        <div className='text-sm uppercase cursor-pointer'>
                                            {Blog.type}
                                        </div>
                                    </Link>
                                    <Link href="#" className='no-underline hover:underline'>
                                        <div className='font-bold pb-2 cursor-pointer'>
                                            {Blog.title}
                                        </div>
                                        <div className='cursor-pointer'>
                                            {Blog.details}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-center'>
                    <Link href="#" className='underline text-blue-600'>
                        Show more articles
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default ToolBlog;