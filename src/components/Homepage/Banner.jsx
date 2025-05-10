import Image from 'next/image';

const Banner = () => {
  const slides = [
    {
      id: 'slide1',
      image: '/assets/images/banner/1.jpg',
      next: '#slide2',
      prev: '#slide4',
      title: 'Affordable Price For Car Servicing',
      description:
        'There are many variations of passages available, but the majority have suffered alteration in some form',
    },
    {
      id: 'slide2',
      image: '/assets/images/banner/2.jpg',
      next: '#slide3',
      prev: '#slide1',
      title: 'Professional Car Maintenance',
      description:
        'Expert service with quality parts and certified technicians',
    },
    {
      id: 'slide3',
      image: '/assets/images/banner/3.jpg',
      next: '#slide4',
      prev: '#slide2',
      title: 'Premium Car Detailing',
      description: 'Bring back that showroom shine with our detailing packages',
    },
    {
      id: 'slide4',
      image: '/assets/images/banner/5.jpg',
      next: '#slide1',
      prev: '#slide3',
      title: '24/7 Roadside Assistance',
      description: 'We are always ready to help you in emergency situations',
    },
  ];

  return (
    <div className="carousel w-full h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          {/* Background Image */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-xl"
              priority={index === 0}
              quality={85}
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute top-0 left-0 h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline bg-transparent hover:bg-primary hover:text-white ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={slide.prev} className="btn btn-circle mr-5">
              ❮
            </a>
            <a href={slide.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
