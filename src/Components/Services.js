import React from 'react'

function Services() {
  return (
    <div className='mt-[67px] md:mt-[100px]  px-[16px] md:px-0 mx-auto w-full'>
        <div>
        <div className=' block md:flex justify-between'>
            <h2 className=' text-black-600  text-center md:text-start max-w-[416px] mx-auto md:mx-0 font-semibold text-25 md:text-48  leading-[31px] md:leading-[58px] font-Montserrat'>Our Excellent Services</h2>
        <div>
            <p className='max-w-[365px] md:max-w-[758px] mt-[12px] md:mt-0 mx-auto text-center md:text-start text-black-200 text-14 md:text-19 font-Poppins leading-[22px] md:leading-7 font-medium'>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
            <div className='hidden md:flex  bg-blue-400 text-white px-[30px] mt-3.5 py-3 w-[175px] rounded-[4px]'>
                <p>Browse Now</p>
                <div> <img src='/assets/images/ArrowRight.png' alt='' /></div>
            </div>
        </div>
        </div>
        </div>
        <div className='mt-[50px]'>
           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
           <div  className='w-[100%]'>
                <div ><img className='w-[100%]' src='/assets/images/service1.png' alt='' /></div>
                <h2 className='pt-[14px] md:pt-[38px] font-Montserrat  text-19 md:text-30 mx-auto  text-center md:text-start leading-[23px] md:leading-9 font-semibold '>Industrial</h2>
                <p className='max-w-[335px] md:max-w-[401px] font-medium text-14 md:text-19 mx-auto text-center md:text-start leading-[22px] md:leading-7  font-Poppins  mt-[8px] md:mt-[14px]'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
            </div>
            <div  className='w-[100%]'>
                <div><img  className='w-[100%]' src='/assets/images/service2.png' alt='' /></div>
                <h2 className='pt-[14px] md:pt-[38px] font-Montserrat  text-19 md:text-30  mx-auto text-center md:text-start leading-[23px] md:leading-9 font-semibold '>Commercial</h2>
                <p className='max-w-[348px] md:max-w-[401px] font-medium text-14 md:text-19 mx-auto text-center md:text-start leading-[22px] md:leading-7  font-Poppins  mt-[8px] md:mt-[14px]'>Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings</p>
            </div>
            <div  className='w-[100%]'>
                <div><img  className='w-[100%]' src='/assets/images/service3.png' alt='' /></div>
                <h2 className='pt-[14px] md:pt-[38px] font-Montserrat  text-19 md:text-30 mx-auto  text-center md:text-start leading-[23px] md:leading-9 font-semibold '>Resedential</h2>
                <p className='max-w-[365px] md:max-w-[401px] font-medium text-14 md:text-19 mx-auto text-center md:text-start leading-[22px] md:leading-7  font-Poppins  mt-[8px] md:mt-[14px]'>Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments</p>
            </div>
           </div>

        </div>
        <div className='flex md:hidden justify-center mt-[21px]'>
        <div className='flex  bg-blue-400 text-white px-[30px] mt-3.5 py-3 w-[175px] rounded-[4px]'>
                <p>Browse Now</p>
                <div> <img src='/assets/images/ArrowRight.png' alt='' /></div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
