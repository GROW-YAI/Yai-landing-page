import React from 'react'


const backgroundStyle = {
    backgroundImage: `url(${"/assets/kischmisch-nwYQzGyEmMw-unsplash.jpg"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const CashewBanner = () => {
    return (
        <div style={backgroundStyle} className='py-14 border-b-2'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
<div className='space-y-6 max-w-xl mx-auto'>
    {/* Text-content */}
    <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3'>
        Your Organic Cashew butter creme is here.
    </h1>

    <div className='flex flex-wrap justify-center sm:justify-start items-center'>
<a href="">
    <img src="" alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]:' />
</a>
    </div>
</div>
                </div>
            </div>
        </div>
    )
}

export default CashewBanner