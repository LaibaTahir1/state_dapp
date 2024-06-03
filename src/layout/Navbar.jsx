import React from 'react'

function Navbar() {
  return (
    <div className='max-w-[1440px] mx-auto w-full text-white px-[25px] md:px-[73px]'>
      <div>
      <div className='flex justify-between py-4'>
       <div><img  className='py-3 md:pt-4' src='/assets/images/LogoImg.png' alt='' /></div>
        <div className='hidden md:flex gap-[30px]  font-Montserrat text-15 font-medium'>
          <p className='py-4'>Home</p>
          <p className='py-4'>Properties</p>
          <p className='py-4'>Pages</p>
          <p className='py-4'>Contact us</p>
          <div className= ' hidden md:flex gap-1.5 py-4'>
            <div> <img src='/assets/images/Man.png' alt='' /></div>
            <p className='font-normal'>Log In/Rigester</p>
          </div>
        </div>
        <div className=' py-3 block md:hidden items-center'><img src='/assets/images/Menu.png' alt='' /></div>
      </div>
      </div>
    
    </div>
  )
}

export default Navbar
