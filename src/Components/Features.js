import React from 'react'

function Features() {
  return (
    <div className='mt-[64px] max-w-[1296px] mx-auto w-full'>
        <h4 className='font-Montserrat font-semibold text-30 text-black-700 ml-[51px]'>Features</h4>
        <div className=' my-[15px] border border-b-2 border-grey-700'></div>
        <div className='mt-[41px] ml-[51px] grid grid-cols-4 gap-[121px]'>
            <div className='flex gap-[15px]'>
            <input type='checkbox' className='rounded-lg bg-blue-400 ' />
            <p className='font-Poppins font-normal text-20 text-black-700'>Air Conditioning</p>
            </div>
        </div>
    </div>
  )
}

export default Features
