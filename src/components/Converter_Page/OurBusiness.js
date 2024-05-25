import React from 'react'

const OurBusiness = ({ title }) => {
    let partners = [
        "https://s.smallpdf.com/static/c62d43e788d8f448.png",
        "https://s.smallpdf.com/static/411e54dafaec079f.png",
        "https://s.smallpdf.com/static/2cdcfc6716e28626.png",
        "https://s.smallpdf.com/static/88f9b1c58ab59d1a.png",
    ]
    return (
        <section>
            <div className='py-10 '>
                <div className='flex flex-col items-center m-auto p-6 '>
                    <h2 className='md:text-4xl text-2xl max-w-[800px] m-auto font-bold text-center text-[rgb(26,26,26)]'>
                        {title}
                    </h2>
                </div>
                <div className='max-w-[1200px] m-auto'>
                    <ul className='sm:p-10 p-6 flex items-center justify-center flex-wrap'>
                        {
                            partners.map((partner, indx) => {
                                return (
                                    <li key={indx} className='p-5 overflow-hidden box-content '>
                                        <img
                                            className='w-full h-full'
                                            loading='lazy'
                                            src={partner}
                                            alt=""
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurBusiness