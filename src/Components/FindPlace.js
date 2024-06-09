import React from 'react'
import useResponsive from '../hooks/useResponsive'
const FINDPLACE = [
  {
    id: 1,
    image: '/assets/images/Home.png',
    amount: '$ 195,000',
    text: 'New',
    Sale: 'FOR SALE',
    heading: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    icon: '/assets/images/heartIcon.png',
    box1: '2 beds',
    box2: '2 baths',
    box3: '1000 sqft',
  },
  {
    id: 2,
    image: '/assets/images/Home.png',
    amount: '$ 195,000',
    text: 'New',
    Sale: 'FOR SALE',
    heading: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    icon: '/assets/images/heartIcon.png',
    box1: '2 beds',
    box2: '2 baths',
    box3: '1000 sqft',
  },
  {
    id: 3,
    image: '/assets/images/Home.png',
    amount: '$ 195,000',
    text: 'New',
    Sale: 'FOR SALE',
    heading: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    icon: '/assets/images/heartIcon.png',
    box1: '2 beds',
    box2: '2 baths',
    box3: '1000 sqft',
  },
  {
    id: 4,
    image: '/assets/images/Home.png',
    amount: '$ 195,000',
    text: 'New',
    Sale: 'FOR SALE',
    heading: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    icon: '/assets/images/heartIcon.png',
    box1: '2 beds',
    box2: '2 baths',
    box3: '1000 sqft',
  },
  {
    id: 5,
    image: '/assets/images/Home.png',
    amount: '$ 195,000',
    text: 'New',
    Sale: 'FOR SALE',
    heading: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    icon: '/assets/images/heartIcon.png',
    box1: '2 beds',
    box2: '2 baths',
    box3: '1000 sqft',
  },
  {
    id: 6,
    image: '/assets/images/Home.png',
    amount: '$ 195,000',
    text: 'New',
    Sale: 'FOR SALE',
    heading: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    icon: '/assets/images/heartIcon.png',
    box1: '2 beds',
    box2: '2 baths',
    box3: '1000 sqft',
  },
]

function FindPlace() {
  const { md } = useResponsive()

  return (
    <div className='max-w-[1440px] mx-auto w-full pb-[60px] md:pb-0 px-[16px]  md:px-0'>
      <h2 className='max-w-[385px] md:max-w-[816px] mx-auto mt-[60px]  md:mt-[100px] text-center text-[28px] md:text-48  leading-[35px] md:leading-[58px] font-Montserrat font-semibold text-black-900'>FIND YOUR NEXT PLACE TO LIVE</h2>
      <div className='flex justify-center'>
        <div className='border-b-4 border-blue-400  w-[169px] pt-[12px] rounded-[4px]'></div>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[28px]'>
          {FINDPLACE.map((items, idx) => {
            if(!md && idx < 1)
            return (
              <div key={`${items.id}___${idx}`} className=' mt-[24px] md:mt-[50px]   px-[16px] shadow-xl rounded-sm max-w-[400px]'>
                <img src={items.image} alt='' />
                <div className=' flex justify-between  mt-[16px] px-[15px]' >
                  <div className='flex items-center gap-[8px]'>
                    <p className='text-black-1000 text-25 font-semibold font-Poppins leading-[38px]'>{items.amount}</p>
                    <p className='text-black-100 font-Poppins font-medium text-16  leading-[24px]'>{items.text}</p>
                  </div>
                  <button className='bg-blue-400 text-white px-[11px] py-[5px]  font-semibold font-PlusJakartaSans text-11 rounded-[4px]  leading-[13px]'>{items.Sale}</button>
                </div>
                <div className='mt-[12px] px-[15px] flex justify-between'>
                  <p className='max-w-[311px]  font-semibold font-Montserrat text-16 leading-[24px]'>{items.heading}</p>
                  <div className='flex items-center'> <img src={items.icon} alt='' /></div>
                </div>
                <div className='mt-[17px] px-[15px] pb-[16px] flex  gap-[4px]'>
                  <button className='text-blue-400 py-[5px] border-grey-1300  border rounded-[4px] px-[11px] '>{items.box1}</button>
                  <button className='text-blue-400 py-[5px] border border-grey-1300 rounded-[4px] px-[11px] '>{items.box2}</button>
                  <button className='text-blue-400 py-[5px] border  border-grey-1300 rounded-[4px] px-[11px] '>{items.box3} </button>
                </div>
              </div>
            )
            else if(md)
            return (
              <div key={`${items.id}___${idx}`} className=' mt-[24px] md:mt-[50px]   px-[16px] shadow-xl rounded-sm max-w-[400px]'>
                <img src={items.image} alt='' />
                <div className=' flex justify-between  mt-[16px] px-[15px]' >
                  <div className='flex items-center gap-[8px]'>
                    <p className='text-black-1000 text-25 font-semibold font-Poppins leading-[38px]'>{items.amount}</p>
                    <p className='text-black-100 font-Poppins font-medium text-16  leading-[24px]'>{items.text}</p>
                  </div>
                  <button className='bg-blue-400 text-white px-[11px] py-[5px]  font-semibold font-PlusJakartaSans text-11 rounded-[4px]  leading-[13px]'>{items.Sale}</button>
                </div>
                <div className='mt-[12px] px-[15px] flex justify-between'>
                  <p className='max-w-[311px]  font-semibold font-Montserrat text-16 leading-[24px]'>{items.heading}</p>
                  <div className='flex items-center'> <img src={items.icon} alt='' /></div>
                </div>
                <div className='mt-[17px] px-[15px] pb-[16px] flex  gap-[4px]'>
                  <button className='text-blue-400 py-[5px] border-grey-1300  border rounded-[4px] px-[11px] '>{items.box1}</button>
                  <button className='text-blue-400 py-[5px] border border-grey-1300 rounded-[4px] px-[11px] '>{items.box2}</button>
                  <button className='text-blue-400 py-[5px] border  border-grey-1300 rounded-[4px] px-[11px] '>{items.box3} </button>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className='hidden md:flex justify-center mt-[42px] mb-[100px] '>
        <div className='flex justify-between bg-blue-400 text-white px-[30px] mt-[14px] py-[13px] w-[185px] rounded-[4px]'>
          <p className='font-Poppins'>Browse Now</p>
          <div> <img src='/assets/images/ArrowRight.png' alt='' /></div>
        </div>
      </div>

    </div>
  );
}

export default FindPlace;
