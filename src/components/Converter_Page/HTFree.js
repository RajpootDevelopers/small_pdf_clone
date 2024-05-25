
const HTFree = ({ data }) => {
    let { title, img, list } = data;
    return (
        <section className='max-w-screen-xl m-auto'>
            <div className='md:flex sm:p-10 p-5 bg-[rgb(242,246,255)]'>
                <div className='md:w-1/3 w-full'>
                    <img
                        className="w-full"
                        loading='lazy'
                        src={img}
                        alt={title}
                    />
                </div>
                <div className='px-10 md:w-2/3 flex flex-col justify-center '>
                    <h2 className='sm:text-4xl text-2xl  pb-4 font-bold '>
                        {title}
                    </h2>
                    {/* <ul> */}
                    {
                        list?.map((point, indx) => {
                            return (
                                <li key={indx} className='pt-1 font-normal sm:text-lg '>
                                    {point}
                                </li>
                            )
                        })
                    }
                    {/* </ul> */}
                </div>
            </div>
        </section>
    )
}

export default HTFree