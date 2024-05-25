const ToolTips = ({ data }) => {
    let { title, desc, questions } = data;

    return <section>
        <div className='m-auto text-center px-6 pt-8'>
            <h2 className='md:text-4xl text-2xl font-bold'>{title}</h2>
            <p className='max-w-[600px] mx-auto pt-4 text-lg'>{desc}</p>
        </div>
        {
            questions?.map((Tip, indx) => {
                return <div key={indx} className='max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2'>
                    <div
                        className={`sm:p-10 p-6  ${indx === 0 || indx === 2 ? "md:order-2" : "md:order-1"} `}
                    >
                        <img
                            loading='lazy'
                            src={Tip.img}
                            alt={Tip.title}
                        />
                    </div>
                    <div
                        className={`sm:p-10 p-6 flex flex-col justify-center md:order-1`}
                    >
                        <h3 className='md:text-3xl text-2xl font-bold pb-4'>{Tip.title}</h3>
                        <p className='text-lg '>
                            {Tip.desc}
                        </p>
                    </div>
                </div>

            })
        }

    </section>
}

export default ToolTips