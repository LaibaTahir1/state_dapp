import React from 'react'

function ContactUs() {
  return (
    <div style={{
        background:'url(/assets/images/blueBackground.png)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
       height:'100%',
    }} >
       <div className='block lg:flex justify-center gap-[40px] max-w-[1440px] mx-auto w-full '>
       <div className='pt-[66px] md:pt-[88px] pb-[66px] md:pb-0 px-[16px] md:px-0 '>
            <h2 className='font-Montserrat font-semibold text-26 md:text-48 flex justify-center  mx-auto text-center md:text-start leading-[32px] md:leading-[58px] pl-0 md:pl-[72px] text-white'>CONTACT US</h2>
            <p className='pt-[17px] md:pt-[31px]  mx-auto pl-0 md:pl-[72px] text-center md:text-start text-white font-Poppins max-w-[385px] md:max-w-[624px]  font-normal  leading-[26px] md:leading-[30px] text-17 md:text-20'>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et.</p>
         <div className='flex justify-center'>
         <div>
          <p className='pl-[16px] md:pl-[24px]  mx-auto py-[25px] md:py-[20px] w-[342px] md:w-[540px]  font-Poppins font-normal text-13 md:text-20 leading-[17px] md:leading-[26px] border border-grey-1500 rounded-lg text-white mt-[11px] md:mt-[30px] ml-0 md:ml-[72px]'>Your Name</p>
          <p className='mt-[17px] md:mt-[56px]   mx-auto pl-[11px] md:pl-[24px] py-[25px] md:py-[20px] max-w-[342px] md:max-w-[540px] font-Poppins font-light tet-13 md:text-20 leading-[13px] md:leading-[26px] border border-grey-1500 rounded-lg text-white ml-[7px] md:ml-[72px]'>yourmailaddressplease@mail.com</p>
           <div className='mt-[17px] md:mt-[64px] bg-white p-[16px]  md:p-[23px] ml-[75px] w-[196px] md:w-[263px] rounded-md flex justify-center md:justify-start items-center gap-[4px] md:gap-[18px] '>
            <p className='text-blue-400 font-Montserrat font-semibold text-13 md:text-15 leading-[17px] md:leading-[21px]'>Get in Touch With Us</p>
           <div> <img src='/assets/images/blueArrow.png' alt=' ' /></div>
           </div>
          </div>
         </div>
        </div>
        <div className='w-[100%]' ><img   className='w-[100%] ' src='/assets/images/Area.png' alt='' /></div>
       </div>
      
    </div>
  )
}

export default ContactUs
