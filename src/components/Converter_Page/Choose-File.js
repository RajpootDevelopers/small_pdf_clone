import Link from "next/link"

const Choose_File = ({ tool, title, choose_dec, choose_list }) => {

    return (
        <section className='px-4'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-center pb-8 pt-2'>
                        {title}
                    </h1>
                </div>
                <div
                    className={`rounded 
                        ${tool?.includes("Word") ? "bg-[#3D99F5]" : tool?.includes("Scanner") ? "bg-[#003CB2]" :
                            tool?.includes("OCR") || tool?.includes("Converter") || tool?.includes("Compresor") || tool?.includes("Compress") ? "bg-[#F23030]" :
                                tool?.includes("Merge") || tool?.includes("Split") || tool?.includes("Rotate") || tool?.includes("Delete") || tool?.includes("Extract") ? "bg-[#7961F2]" :
                                    tool?.includes("AI") || tool?.includes("Number") || tool?.includes("Reader") || tool?.includes("Edit") ? "bg-[#0FC0C5]" :
                                        tool?.includes("eSign") ? "bg-[#E667E6]" :
                                            tool?.includes("Excel") ? "bg-[#0C4]" :
                                                tool?.includes("PPT") ? "bg-[#FF8000]" :
                                                    tool?.includes("JPG") ? "bg-[#FFB700]" :
                                                        tool?.includes("Unlock") || tool?.includes("Protect") || tool?.includes("Flatten") ? "bg-[#FF5975]" :
                                                            "bg-gray-800"
                        }
                    `}
                >
                    <div className='flex w-full min-h-[300px]'>
                        <div className=' cursor-pointer w-full'>
                            <label htmlFor="choose-file" className='cursor-pointer'>
                                <input id='choose-file' type="file" className='hidden' multiple />
                                <div className='relative rounded-lg w-full h-full'>
                                    <div className=' absolute inset-[10px] border border-dashed border-white bg-black/10 rounded'></div>
                                    <div className='h-full w-full flex flex-col items-center justify-center'>
                                        <div className='h-16 w-24 pb-5 cursor-pointer z-0'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 96 60" ><path d="m56.936.888 30.189 1.054 7.998 8.577-1.473 42.182a2.5 2.5 0 0 1-2.421 2.411h-.165L69 54.341V58a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-3.731l-24.064.84a2.5 2.5 0 0 1-2.575-2.247l-.011-.164L.675 4.728a2.5 2.5 0 0 1 2.247-2.575l.164-.011 30.189-1.054 7.242 6.753-.149.159h13.817l.165-4.7A2.5 2.5 0 0 1 56.771.887zM59.999 9H31a1 1 0 0 0-.993.883L30 10v29h20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H30v6a1 1 0 0 0 .883.993L31 59h36a1 1 0 0 0 .993-.883L68 58V17h-8zm-3.098-7.113a1.5 1.5 0 0 0-1.54 1.303l-.012.144L55.186 8H61l8 8v9.629a10.46 10.46 0 0 1 5.122-1.13c5.796.202 10.33 5.064 10.127 10.86s-5.064 10.329-10.86 10.126a10.5 10.5 0 0 1-4.39-1.13v8.986l22.1.772a1.5 1.5 0 0 0 1.54-1.303l.012-.144 1.428-40.975-7.493-.262-1-.035.297-8.496zm-24.799.24L3.121 3.142a1.5 1.5 0 0 0-1.445 1.407l-.002.145 1.675 47.97a1.5 1.5 0 0 0 1.407 1.445l.145.002 24.098-.841V52H28a1 1 0 0 1-1-1v-6.165l-7.405.258v.001l-1 .035-4.996.174-1 .036-.733-20.988L29 23.753V10a2 2 0 0 1 2-2h1.307zM59 50v1h-6v-1zm-26.685-8H30v7h1.303v-2.569h1.057c1.584 0 2.797-.717 2.797-2.269 0-1.627-1.213-2.162-2.842-2.162m6.19 0H36.54v7h2.034c2.18 0 3.506-1.21 3.506-3.532 0-2.312-1.326-3.468-3.573-3.468M48 42h-4.438v7h1.303v-2.922h2.674v-1.049h-2.674v-1.98H48zm-9.584 1.006c1.483 0 2.326.75 2.326 2.462 0 1.654-.777 2.46-2.151 2.522l-.175.004h-.573v-4.988zM59 45v1h-6v-1zm-26.787-2.005c1.09 0 1.663.29 1.663 1.167 0 .806-.467 1.223-1.431 1.27l-.187.004h-.955v-2.44zm36.814-16.244-.028.016v16.45a9.46 9.46 0 0 0 4.425 1.27c4.905.17 9.07-3.408 9.739-8.162l-9.442-.33.366-10.497a9.45 9.45 0 0 0-5.06 1.253M18.42 40.132l-4.997.175.14 3.996 4.997-.174zm8.593-.3-7.593.265.14 3.997 7.438-.26L27 40q0-.086.014-.168M59 40v1h-6v-1zm-40.753-4.865-4.997.175.14 3.997 4.996-.174zm10.752-.376-9.753.341.14 3.998 9.613-.336zM59 35v1H39v-1zm-40.928-4.862-4.997.175.14 3.997 4.997-.174zM29 29.756l-9.927.347.14 3.998L29 33.759zM59 30v1H39v-1zm-41.102-4.859-4.997.175.14 3.997 4.996-.174zm11.101-.387-10.102.353.14 3.997 9.962-.348zm32-15.34V16h6.585zm25.875-6.273-.254 7.289 7.29.254zM33.11 2.3l.2 5.7h5.911z"></path></svg>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <div className='flex mt-4 bg-white rounded overflow-hidden'>
                                                <div className='z-10 flex items-center font-bold p-4 bg-white hover:bg-gray-200 '>
                                                    <div className='w-6 h-6 font-bold'>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13 12v-2h1v2h2v1h-2v2h-1v-2h-2v-1zm5 8H6V4H5v17h13zm1 0v2H4V3h2V1h10l5 5v14zM7 2v17h13V6l-4-4zm9 0 4 4h-4z"
                                                            >
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <span className='ml-2 whitespace-nowrap font-bold uppercase'>
                                                        Choose Files
                                                    </span>
                                                </div>

                                                <input
                                                    type="checkbox"
                                                    className="peer hidden"
                                                    id="links-open"
                                                // defaultChecked={false}
                                                />

                                                <button
                                                    className="z-10 relative p-4 border-l-2 bg-white hover:bg-gray-50  peer-checked:bg-gray-200"
                                                // onClick={(evt) => {
                                                //     console.log("Clicked", evt)
                                                // }}
                                                >
                                                    <label
                                                        htmlFor="links-open"
                                                        className="absolute left-0 top-0 h-full w-full cursor-pointer"
                                                    >
                                                    </label>
                                                    <svg
                                                        className='w-4'
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="m13.333 4 1.334 1.333L8 12 1.333 5.333 2.667 4 8 9.5z"
                                                        >
                                                        </path>
                                                    </svg>
                                                </button>

                                                <div className="peer-checked:block z-10 hidden w-56 absolute mt-16 rounded-lg overflow-hidden border-black bg-white shadow-lg">
                                                    <ul className="">
                                                        <li>
                                                            <Link href="/" className="flex gap-2 px-4 py-3 hover:bg-gray-100 hover:text-gray-900">
                                                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19.002a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7h18zm-18-14a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H20a1 1 0 0 1 1 1v4H3z"></path></svg>
                                                                From Device
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/" className="flex gap-2 px-4 py-3 hover:bg-gray-100 hover:text-gray-900">
                                                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#FF46FB" d="M15 15h6v6h-6z"></path><path fill="#CA41FC" d="M9 15h6v6H9z"></path><path fill="#8B48FE" d="M3 15h6v6H3z"></path><path fill="#81E650" d="M21 9h-6v6h6z"></path><path fill="#00D267" d="M15 9H9v6h6z"></path><path fill="#00C0FF" d="M9 9H3v6h6z"></path><path fill="#FFD200" d="M15 3h6v6h-6z"></path><path fill="#FF8E00" d="M9 3h6v6H9z"></path><path fill="#FF5400" d="M3 3h6v6H3z"></path></svg>
                                                                From Small PDF
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.dropbox.com/" target="_blank" className="flex gap-2 px-4 py-3 hover:bg-gray-100 hover:text-gray-900">
                                                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="#0061FF" viewBox="0 0 24 24"><path d="m12.015 6.574-5.508 3.573 5.508 3.574-5.508 3.574L1 13.69l5.507-3.573L1 6.574 6.507 3zM6.478 18.426l5.507-3.573 5.508 3.573L11.985 22zm5.537-4.735 5.507-3.573-5.507-3.544L17.493 3 23 6.574l-5.507 3.573L23 13.721l-5.507 3.574z"></path></svg>
                                                                From DropBox
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.google.com/drive/" target="_blank" className="flex gap-2 px-4 py-3 hover:bg-gray-100 hover:text-gray-900">
                                                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFC107" d="M8.333 3h7.334L23 15h-7.333z"></path><path fill="#1976D2" d="m4.601 21 3.7-6H23l-3.667 6z"></path><path fill="#4CAF50" d="M1 15.063 4.601 21 12 9 8.333 3z"></path></svg>
                                                                From Google Drive
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='p-3 text-center text-white z-0'>
                                            Or drop files here
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:flex sm:gap-4 my-10 justify-center'>
                    <p className='pb-6 font-medium'>
                        {choose_dec}
                    </p>
                    <ul className='w-full max-w-[400px]'>
                        {
                            choose_list?.map((point, indx) => {
                                return <li key={indx} className='pt-0 flex py-2 '>
                                    <div className='pr-2 '>
                                        <div className='w-6 h-6 text-green-400'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m-1.591-6.85 5.728-5.727a.9.9 0 0 1 1.272 1.272l-6.293 6.294a1 1 0 0 1-1.414 0L6.59 12.877a.9.9 0 0 1 1.272-1.272z"
                                                >
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    {point}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Choose_File;