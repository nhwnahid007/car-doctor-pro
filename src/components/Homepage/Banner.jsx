import Image from 'next/image';
import React from 'react';

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: 'Affordable Price',
      description:
        'There are many varieties of products available at the best prices',
      image: '/assets/images/banner/1.jpg',
      prev: '#slide4',
      next: '#slide2',
    },
    {
      id: 2,
      title: 'Quality Service',
      description: 'We provide excellent customer service with every purchase',
      image: '/assets/images/banner/2.jpg',
      prev: '#slide1',
      next: '#slide3',
      },

    {
      id: 3,
      title: 'Fast Delivery',
      description: 'Quick shipping and handling for all your orders',
      image: '/assets/images/banner/3.jpg',
      prev: '#slide2',
      next: '#slide4',
    },
    {
      id: 4,
      title: 'Satisfaction Guaranteed',
      description: 'Your satisfaction is our top priority',
      image: '/assets/images/banner/4.jpg',
      prev: '#slide3',
      next: '#slide1',
    },


  ];

  return (
    <div className="container mx-auto text-white">
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
            key={index}
          >
            <Image
              width={1200}
              height={400}
              src={slide.image}   
              className="w-full rounded-lg"
              alt="banner"
          />
          {/* title and description */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={slide.prev} className="btn btn-circle">
                ❮  
              </a>
              <a href={slide.next} className="btn btn-circle">
              ❯
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
