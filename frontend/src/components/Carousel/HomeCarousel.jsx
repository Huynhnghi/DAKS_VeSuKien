import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import carousel1 from '../../assets/img/carousel1.jpg';
import banner2 from '../../assets/img/banner-2.png';
import banner3 from '../../assets/img/banner-3.png';

function HomeCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[700px]"
    >

      {/* Slide 1: Video Banner */}
      <SwiperSlide className="relative h-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          src="https://www.youtube.com/embed/3KHm7ppgh2c?autoplay=1&mute=1&loop=1&playlist=3KHm7ppgh2c"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </SwiperSlide>

      {/* Slide 2: Image Banner */}
      <SwiperSlide>
        <img
          className='rounded-xl object-cover w-full h-full'
          src={banner2}
          alt="Event"
        />
      </SwiperSlide>

      {/* Slide 3: Image Banner */}
      <SwiperSlide className='p-14 h-[700px]'>
        <img
          className='rounded-xl object-cover w-full h-full'
          src={carousel1}
          alt="Event"
        />
      </SwiperSlide>

      {/* Slide 4: Image Banner */}
      <SwiperSlide>
        <img
          className='rounded-xl object-cover w-full h-full'
          src={banner3}
          alt="Event"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeCarousel;
