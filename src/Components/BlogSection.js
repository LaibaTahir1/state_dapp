import React from 'react'

function BlogSection() {
  return (
    <div className='mt-[60px] md:mt-[40px] mb-[60px] md:mb-0 px-[17px] md:px-0 pb-0 md:pb-[100px]'>
        <h2 className='text-black-1200  font-Montserrat font-semibold text-25 md:text-48  leading-[31px] md:leading-[58px] text-center'>OUR BLOG</h2>
        <div className='mt-[21px] md:mt-[51px] flex  justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[24px]'>
                <div className='w-[100%]' style={{
                    background:'url(/assets/images/Blog1.png)',
                    backgroundRepeat:'no-repeat',
                    height:'411px',
                    width:'385px',
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'100%',
                }}>
                    <p className='pt-[303px] text-gray-800 font-Poppins font-light text-12  leading-[32px] md:leading-[20px] pl-[24px] '>29.Jun.2021</p>
                    <p className='pl-[24px] pt-[15px] text-grey-1600 font-Poppins text-16  leading-[25px] font-medium max-w-[303px]'>Richard Norton photorealistic rendering as real photos</p>
                </div>
                <div style={{
                    background:'url(/assets/images/Blog2.png)',
                    backgroundRepeat:'no-repeat',
                    height:'411px',
                    width:'385px',
                }}>
                    <p className='pt-[303px] text-gray-800 font-Poppins font-light text-12  leading-[32px] md:leading-[20px]  pl-[24px] '>29.Jun.2021</p>
                    <p className='pl-[24px] pt-[15px] text-grey-1600 font-Poppins text-16  leading-[25px] font-medium max-w-[303px]'>Richard Norton photorealistic rendering as real photos</p>
                </div>
                <div style={{
                    background:'url(/assets/images/Blog3.png)',
                    backgroundRepeat:'no-repeat',
                    height:'411px',
                    width:'385px',
                }}>
                    <p className='pt-[303px] text-gray-800 font-Poppins font-light text-12 leading-[32px] md:leading-[20px]  pl-[24px] '>29.Jun.2021</p>
                    <p className='pl-[24px] pt-[15px] text-grey-1600 font-Poppins text-16  leading-[25px] font-medium max-w-[303px]'>Richard Norton photorealistic rendering as real photos</p>
                </div>
                <div className='flex  md:hidden justify-center'>
       <div className='flex items-center rounded-md   gap-[12px] md:gap-[20px]  mt-[25px] bg-blue-400  w-[139px] md:w-[209px] px-[26px] md:px-[40px] pb-[8px] md:pb-[20px] pt-[6px] md:pt-[18px] '>
            <p className='text-white font-Montserrat font-bold text-10 md:text-17 leading-[13px] md:leading-[21px]'>Learn More</p>
           <div> <img src='/assets/images/arrow.png' alt='' /></div>
        </div>
       </div>

            </div>

        </div>
      
    </div>
  )
}

export default BlogSection
