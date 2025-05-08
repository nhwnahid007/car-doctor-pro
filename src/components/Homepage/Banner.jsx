'use client'; // if you're using Next.js App Router

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
    },
    {
      id: 2,
      title: 'Quality Service',
      description: 'We provide excellent customer service with every purchase',
      image: '/assets/images/banner/2.jpg',
    },
    {
      id: 3,
      title: 'Fast Delivery',
      description: 'Quick shipping and handling for all your orders',
      image: '/assets/images/banner/3.jpg',
    },
    {
      id: 4,
      title: 'Satisfaction Guaranteed',
      description: 'Your satisfaction is our top priority',
      image: '/assets/images/banner/4.jpg',
    },
  ];

  const totalSlides = slides.length;

  return (
    <div className="container mx-auto mt-5 text-white">
      <div className="carousel w-full rounded-xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full h-[90vh]"
          >
            {/* Image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071952b3] to-[#0000004d]" />
            </div>

            {/* Text content */}
            <div className="relative z-10 h-full flex items-center pl-6 md:pl-12 lg:pl-36 w-full">
              <div className="max-w-xl space-y-5">
                <h1 className="text-4xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg">{slide.description}</p>
                <div className="flex gap-4">
                  <button className="btn btn-primary">Discover More</button>
                  <button className="btn btn-outline text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
              <a
                href={`#slide${index === 0 ? totalSlides : slide.id - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index === totalSlides - 1 ? 1 : slide.id + 1}`}
                className="btn btn-circle"
              >
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
