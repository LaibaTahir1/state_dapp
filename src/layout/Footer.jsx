import React from 'react'

function Footer() {
  return (
    <div className='bg-white px-[17px] md:px-0'>
        <div className='pt-[67px] pl-0 lg:pl-[76px] pb-[20px]'>
           <div className='flex justify-center '>
           <div className=' block lg:flex gap-[90px] justify-center'>
           <div>
           <div className='flex justify-center md:justify-start'> <img src='/assets/images/footerLogo.png' alt='' /></div>
            <div className='pt-[33px] text-grey-900 font-normal text-base leading-6'>
                <p className='max-w-[400px] font-Raleway  text-center md:text-start '>We’re reimagining how you buy, sell and rent. It’s now 
                easier to get into a place you love. So let’s do this, 
                together.</p>
                <div className='pt-[59px] pb-[20px] md:pb-[88px]'>
                    <div className='flex justify-center md:justify-start'><img src='/assets/images/Social.png' alt='' /></div>

                </div>
            </div>
           </div>
           <div >
           <div className='flex gap-[90px] '>
           <div >
            <h2 className='font-medium font-Montserrat text-20'>COMPANY</h2>
            <div className='text-gray-200   font-Raleway pt-[12px]  leading-10'><p>Services</p>
            <p>Process</p>
            <p>Property  </p>
            <p>Our Team</p></div>
           </div>
           <div className='pb-[19px]' >
            <h2 className='font-medium font-Montserrat text-20'>INFORMATION</h2>
            <div className='text-gray-200  font-Raleway  pt-[12px]  leading-10'><p>About Us</p>
            <p>Why Chose Us</p>
            <p>Blog  </p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p></div>
           </div>
           </div>
           <p className='py-[16px] hidden md:flex text-grey-1000'>2021 @ all rights reserved</p>
           </div>

           <div className='pr-0 md:pr-[50px]  pb-[27px]'>
            <h2 className='leading-7 text-black-700 font-Montserrat text-20 font-normal'>Address</h2>
                <p className='text-grey-500 font-normal max-w-[375px] md:max-w-[338px] leading-5 font-Poppins text-14 pt-[20px]'>ABC Company, 123 East, 17th Street, St. louis 10001</p>
                <h3 className='pt-[53px]  font-normal text-18 font-Montserrat text-black-700'>News letter </h3>
                <div className='pt-[23px] flex justify-between '>
                    <p className='text-grey-500 font-normal font-Poppins text-14'>Enter your email address</p>
                   <div> <img src='/assets/images/MaiLicon.png' alt='' /></div>
                </div>
           </div>
           </div>
           </div>
           <div className='flex justify-center'>  <p className='py-[10px] flex  md:hidden jusify-center  text-grey-1000'>2021 @ all rights reserved</p></div>
        </div>
      
    </div>
  )
}

export default Footer
