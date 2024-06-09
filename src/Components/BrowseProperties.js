import React from 'react'

function BrowseProperties() {
  return (
    <div  className='flex flex-col justify-center'
    style={{
       background:'url(/assets/images/propertyBg.png)',
        height:'499px',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
        
    }} >
        <div className='max-w-[1249px] mx-auto w-full text-white'>
            <div className='flex justify-center md:justify-start gap-[15px] items-center'>
               <img src='/assets/images/homeimg.png' alt=''  />
                <p className='font-Poppins font-normal text-20 leading-[23px] mt-[3px]'>PROPERTIES </p>
            </div>
            <h2 className='mt-[40px] max-w-[402px] mx-auto md:mx-0 text-center md:text-start font-Montserrat font-semibold text-29 md:text-70 leading-[29px] md:leading-[82px]'>BROWSE PROPERTIES</h2>

        </div>

      
    </div>
  )
}

export default BrowseProperties
