import React, { useState } from 'react'

const ABOUT = [
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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

function About() {
  const [isBuy, setIsBuy] = useState('rent');



  return (
    <div className='mt-[95px]  max-w-[1296px] mx-auto w-full'>
      <div className='max-w-[899px] mx-auto w-full'>
        <div className='w-[428px] mx-auto  flex gap-[9px] h-[76px] items-center rounded-full border border-grey-1300 '>
          <button onClick={() => setIsBuy('rent')} className={`w-[203px] px-[77px] py-[20px] text-center text-grey-1200 rounded-full  text-20 font-Montserrat font-semibold leading-[24px] ${isBuy === 'rent' ? 'text-white bg-blue-400' : 'text-grey-1200 bg-white'}`}>Rent</button>
          <button onClick={() => setIsBuy('buy')} className={`w-[203px] px-[77px] py-[20px] text-center rounded-full text-20 font-Montserrat font-semibold leading-[24px] ${isBuy === 'buy' ? 'text-white bg-blue-400' : 'text-grey-1200 bg-white'}`} >Buy</button>
        </div >
        <div className='mt-[24px] p-[16px] bg-white shadow sdadow-md   rounded-[8px] border border-grey-1300 flex gap-[16px]'>
          <input type='text' placeholder='Enter key Word...' className='text-grey-300 font-Montserrat rounded-[8px] border border-grey-1300  font-normal text-16 leading-[19px] py-[15px] w-[200px] pl-[16px]' />
          <div className='flex items-center justify-between gap-[10px] rounded-md border border-grey-1300  w-[180px]'>
            <select className='w-full p-2 outline-none'>
              <option value="user" disabled>Home</option>
              <option value="user">Home</option>
              <option value="user">Home</option>
              <option value="user">Home</option>

              <option value="user">Home</option>
            </select>
          </div>

          <div className=' flex items-center gap-[10px] rounded-[8px] border border-grey-1300  w-[141px]'>
            <p className='text-grey-300 font-Montserrat  font-normal text-16 leading-[19px] py-[15px] pl-[24px]'>Location</p>
            <select></select>
          </div>
          <div className=' flex items-center gap-[10px] rounded-[8px] border border-grey-1300  w-[111px]'>
            <p className='text-grey-300 font-Montserrat  font-normal text-16 leading-[19px] py-[15px] pl-[24px]'>Price</p>
            <select></select>
          </div>
          <button className='text-white font-Montserrat text-center bg-blue-400 rounded-[8px]  border border-grey-1300  font-medium text-20 leading-[24px] py-[15px] w-[171px] '>Search</button>

        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[28px]'>
        {ABOUT.map((items, idx) => {

          return (
            <div key={`${items.id}___${idx}`} className=' mt-[24px] md:mt-[50px]   px-[16px] shadow-xl rounded-sm max-w-[400px]'>
              <img src={items.image} alt='' />
              <div className=' flex justify-between  mt-[16px] px-[15px]' >
                <div className='flex items-center gap-[8px]'>
                  <p className='text-black-1000 text-25 font-semibold font-Poppins leading-[38px]'>{items.amount}</p>
                  <p className='text-black-100 font-Poppins font-medium text-16  leading-[24px]'>{items.text}</p>
                </div>
                <button className='bg-blue-400 text-white px-[11px] py-1  font-semibold font-PlusJakartaSans text-11 rounded-md'>{items.Sale}</button>
              </div>
              <div className='mt-[12px] px-[15px] flex justify-between'>
                <p className='max-w-[311px]  font-semibold font-Montserrat text-16 leading-[24px]'>{items.heading}</p>
                <div className='flex items-center'> <img src={items.icon} alt='' /></div>
              </div>
              <div className='mt-[17px] px-[15px] pb-4 flex  gap-[4px]'>
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
  )
}

export default About
