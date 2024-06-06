import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import BackgroundSwipper from './BackgroundSwipper';
const SLIDER=[
    {
        id:1,
        heading:' Where Every Property Tells a Story of Homecoming!',
        paragraph:' In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, utlabore et accurate disserendum et harum quidem exercitus quid.',
    },
    {
        id:2,
        heading:' Where Every Property Tells a Story of Homecoming!',
        paragraph:' In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, utlabore et accurate disserendum et harum quidem exercitus quid.',
    },
    {
        id:3,
        heading:' Where Every Property Tells a Story of Homecoming!',
        paragraph:' In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, utlabore et accurate disserendum et harum quidem exercitus quid.',
    },
    {
      id:4,
      heading:' Where Every Property Tells a Story of Homecoming!',
      paragraph:' In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, utlabore et accurate disserendum et harum quidem exercitus quid.',
  },
  {
    id:5,
    heading:' Where Every Property Tells a Story of Homecoming!',
    paragraph:' In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, utlabore et accurate disserendum et harum quidem exercitus quid.',
},
]

function HeroSection() {
  return (
    <Swiper navigation={true } slidesPerView={1}  spaceBetween={20}   modules={[Navigation]} className="mySwiper">

        {SLIDER.map((item ,index) =>{
          return(
            <SwiperSlide  key={`${item.id}___${index}`}>
        <BackgroundSwipper 
            heading={item.heading}
          paragraph={item.paragraph}
          />
          
           </SwiperSlide>
          )
        })}
      </Swiper>

  )
}

export default HeroSection
