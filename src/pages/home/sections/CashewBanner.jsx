import React from 'react'


const backgroundStyle = {
    backgroundImage: `url(${"/assets/kischmisch-nwYQzGyEmMw-unsplash.jpg"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    position: "relative",
};

const CashewBanner = () => {
    return (
        <div style={backgroundStyle} className='py-14 border-b-2'>
            {/* Overlay "*/}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className='container relative z-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        {/* Text-content */}
                        <h1 className='text-5xl text-center sm:text-left sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-green-300 pl-3'>
                            Your Organic Cashew cream is here.
                        </h1>

                        <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                            <a href="">
                                <img src="" alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]:' />
                                

                                {/* Overlay */}
                                {/* <div className="absolute inset-0 h-[300px] bg-[#000000] opacity-60 backdrop-blur-md border border-[rgba(255,255,255,0.2)]"></div> */}
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashewBanner;