import React from 'react'

const HOUSEPROPERTY = [
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
function HouseProperty() {
  return (
    <div className='mt-[24px] md:mt-[50px]  max-w-[1296px] mx-auto w-full flex justify-center'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-[28px]'>
        {HOUSEPROPERTY.map((items, idx) => {

          return (
            <div key={`${items.id}___${idx}`} className='    px-[16px] shadow-xl rounded-sm max-w-[400px]'>
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

export default HouseProperty
