import React from 'react'

function Property() {

  

  return (
    <div className='mt-[60px] md:mt-[100px] pb-[100px] max-w-[1440px] px-[16px]  md:px-0 mx-auto w-full'>
      <p className='font-Montserrat pl-0 md:pl-[72px] text-25 md:text-48 text-center md:text-start leading-[31px] md:leading-[58px] font-semibold'>PROPERTY SELECTION <spain className='text-blue-400'>PROCESS</spain></p>
      <div className='flex md:hidden justify-center mt-[7px]'> <div className='border-b-4 border w-[181px] border-blue-400 '></div></div>
      <p className='mt-[20px] max-w-[365px] md:max-w-[882px] pl-0 md:pl-[72px] text-center md:text-start  text-black-200 text-15 md:text-24 font-normal leading-[22px] md:leading-[36px] font-Poppins'>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et.</p>
      <div className=' hidden md:block'>
        <div className='mt-[50px]'
          style={{
            background: 'url(/assets/images/selectionImages.svg)',
            maxWidth: '1290px',
            backgroundPosition: 'center',
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            height: '382px',
          }}>
          <div className='hidden md:flex h-full items-center pl-10'>
            <div className='max-w-[25%] w-full text-center p-3'>
              <img src='/assets/images/searchIcon.png' alt='' className='mx-auto' />
              <h2 className='text-black-800 font-bold pt-[12px] font-Poppins text-22 leading-[22px'>Explore</h2>
              <p className='pt-[9px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='max-w-[25%] w-full text-center'>
              <img className='mx-auto'  src='/assets/images/propertyselectIcon.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-22 leading-[22px'>Select a property</h2>
              <p className='pt-[9px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='max-w-[25%] w-full text-center'>
              <img className='mx-auto'  src='/assets/images/siteIcon.svg' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-22 leading-[22px'>Book a site</h2>
              <p className='pt-[9px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='max-w-[25%] w-full text-center'>
              <img className='mx-auto'  src='/assets/images/propertybook.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-22 leading-[22px'>Book your property</h2>
              <p className='pt-[9px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile screen design */}

      <div className='block md:hidden'>
        <div className='mt-[50px]'
          style={{
            background: 'url(/assets/images/selectionImages2.svg)',
            maxWidth: '1290px',
            backgroundPosition: 'center',
            backgroundSize:'100% 100%',
            backgroundRepeat:'no-repeat',
            height: '800px',
          }}>
          <div className='flex flex-col md:hidden h-full items-center '>
            <div className='max-h-[25%]  h-full text-center py-[50px]'>
              <img src='/assets/images/searchIcon2.png' alt='' className='mx-auto mt-[7px]' />
              <h2 className='text-black-800 font-bold pt-[12px] font-Poppins text-13 leading-[18px]'>Explore</h2>
              <p className='pt-[9px] max-w-[91px] text-center font-Poppins text-12 font-normal leading-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='max-h-[25%] h-full text-center  py-[50px]'>
              <img className='mx-auto'  src='/assets/images/propertySelectIcon2.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-13 leading-[18px]'>Select a property</h2>
              <p className='pt-[9px] max-w-[91px] text-center font-Poppins text-12 font-normal leading-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='max-h-[25%] h-full text-center  py-[50px]'>
              <img className='mx-auto'  src='/assets/images/siteIcon2.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-13 leading-[18px]'>Book a site</h2>
              <p className='pt-[9px] max-w-[91px] text-center font-Poppins text-12 font-normal leading-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='max-h-[25%] h-full text-center  py-[50px]'>
              <img className='mx-auto'  src='/assets/images/propertybook2.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-13 leading-[18px]'>Book your property</h2>
              <p className='pt-[9px] max-w-[91px] text-center font-Poppins text-12 font-normal leading-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=' flex md:hidden justify-center'>
        <div className='mt-[50px]'
          style={{
            background: 'url(/assets/images/selectionImages2.svg)',
            width: '1290px',
            backgroundPosition: 'center',
            height: '382px',
          }}>
          <div className='block md:hidden '>
            <div>
              <img className='pt-[123px]   pl-[174px]' src='/assets/images/searchIcon.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[12px] font-Poppins text-22 leading-[22px] pl-[155px]'>Explore</h2>
              <p className='pt-[9px] max-w-[280px]  pl-[155px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img className='pt-[123px] pl-[174px]' src='/assets/images/propertyselectIcon.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-22 leading-[22px] pl-[155px]'>Select a property</h2>
              <p className='pt-[9px] max-w-[280px]  pl-[155px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img className='pt-[123px] pl-[174px]' src='/assets/images/siteIcon.svg' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-22 leading-[22px] pl-[155px]'>Book a site</h2>
              <p className='pt-[9px] max-w-[280px]  pl-[155px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img className='pt-[123px] pl-[174px]' src='/assets/images/propertybook.png' alt='' />
              <h2 className='text-black-800 font-bold pt-[13px] font-Poppins text-22 leading-[22px] pl-[155px]'>Book your property</h2>
              <p className='pt-[9px] max-w-[280px]  pl-[155px] text-center font-Poppins text-19 font-normal leading-[29px]'>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Property
