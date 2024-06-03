import React from 'react'

function LearnMore() {
  return (
    <div
    style={{
        background:'url(/assets/images/learnMorebg.png)',
        backgroundSize:'cover',
        backgroundPosition:'cover',
        height:'554px',
    }} className='px-[17px] md:px-0'>
        <div className='max-w-[1440px] mx-auto  w-full'>
          <div className='flex justify-center pt-[98px] md:pt-[118px]'>  <div className='border-white border-b-4  w-[169px]'></div></div>
        <div  className='flex justify-center'>  <h2 className='mt-[10px] md:mt-[17px] max-w-[268px] md:max-w-[780px] text-white text-center leading-[31px] md:leading-[58px] font-semibold font-Montserrat text-25 md:text-48'>Why you should choose us. </h2></div>
        <div className='flex justify-center'>  <p className=' mt-[30px] md:mt-[26px] font-Poppins text-14 md:text-21  text-center leading-[21px] md:leading-[30px] font-light text-white   max-w-[365px] md:max-w-[780px] '>Creating quality urban lifestyles, building stronger communities and creating a safe haven for the general populace is what we do, we give affordabel house for sell, rent and also lease great propertities for any kind of usage.</p></div>
       <div className='flex justify-center'>
       <div className='flex items-center rounded-md   gap-[7px] md:gap-[20px]  mt-[26px] bg-blue-400  w-[100px] md:w-[209px] px-[9px] md:px-[40px] pb-[7px] md:pb-[20px] pt-[4px] md:pt-[18px] '>
            <p className='text-white font-Montserrat font-bold text-10 md:text-17 leading-[13px] md:leading-[21px]'>Learn More</p>
           <div> <img src='/assets/images/arrow.png' alt='' /></div>
        </div>
       </div>

        </div>
       
      
    </div>
  )
}

export default LearnMore
