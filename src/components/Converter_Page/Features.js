
const Features = ({ data }) => {

    return (
        <section className='px-7 py-20 max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3'>
            {
                data?.map((feature, indx) => {
                    return (
                        <div key={indx} className='text-center px-4 pb-14'>
                            <img
                                className='w-12 h-12 mx-auto'
                                src={feature.image}
                                alt=""
                                width={48}
                                height={48}
                            />
                            <div className=' font-bold m-auto py-3 '>
                                {feature.title}
                            </div>
                            <div className='px-6 m-0 max-w-full'>
                                {feature.desc}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Features;