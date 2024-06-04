import React from 'react'

function HeroSection() {
  return (
    <div className='text-white border ' style={{
        background:'url(/assets/images/bg_img.png)',
        height:'800px',
        backgroundSize:'cover',
        minHeight:'101vh',
        marginTop:'-80px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'

        
    }}>
       <div className=' max-w-[1320px] mx-auto w-full '>
       <h2 className=' max-w-[378px] md:max-w-[715px]  mx-auto lg:mx-0 mt-[228px] font-semibold font-Montserrat text-center md:text-start   text-32 md:text-64 leading-[39px] md:leading-[78px] '>Where Every Property Tells a Story of Homecoming!</h2>
       <p className='pt-[21px] md:pt-10 mx-auto lg:mx-0 max-w-[378px] md:max-w-[668px] md:leading-[18px] leading-7 text-center md:text-start   text-14 md:text-20 font-normal font-PlusJakartaSans'>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
       </div>
       
      
    </div>
  )
}

export default HeroSection
