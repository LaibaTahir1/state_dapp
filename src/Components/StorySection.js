import React from 'react'

function StorySection() {
  return (
    <div
    style={{
        background:'url(/assets/images/blueBg.png)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'800px',
    }} className='px-[16px] md:px-0 '>
       <div className=' block md:flex justify-between  max-w-[1440px] mx-auto w-full px-0 md:px-[79px] '>
      <div className=''>
      <h2 className='text-white max-w-[384px] text-center md:text-start  mx-auto font-Montserrat text-25 md:text-48   font-semibold leading-[31px] md:leading-[58px] pt-[50px] md:pt-[171px]'>OUR STORY WHO WE ARE</h2>
       <p className=' pt-[17px] md:pt-[30px] font-Poppins text-center md:text-start text-14 md:text-19 font-normal mx-auto leading-[22px] md:leading-[28px] max-w-[607px] text-white'>Established in 1992, PT. Wahana Cipta operates as a GeneralContracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta.  As the company grows, now we are present as a reliable...</p>
       <div className='flex  items-center  mx-auto justify-center md:justify-start gap-[8px] '>
        <p className='text-white text-semibold text-17 leading-[25px] mt-[12px] md:mt-[43px]  font-Poppins'>See More</p>
       <div className='mt-[6px] md:mt-[40px]' > <img src='/assets/images/arrow.png' alt='' /></div>
       </div>
      </div>
      <img className='mt-[16px] md:mt-[130px] mx-auto' src='/assets/images/building.png' alt='' />
       </div>
      
    </div>
  )
}

export default StorySection
