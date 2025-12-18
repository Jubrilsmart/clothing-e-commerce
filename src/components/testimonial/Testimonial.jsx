import React from 'react'
import Slider from 'react-slick'

const testimonials = [
    {
        id: 1,
        img: 'https://picsum.photos/150/150',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        name: 'Lorem dolor.'
    },
     {
        id: 2,
        img: 'https://picsum.photos/140/150',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        name: 'Lorem dolor.'
    },
     {
        id: 3,
        img: 'https://picsum.photos/151/153',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        name: 'Lorem dolor.'
    },
     {
        id: 4,
        img: 'https://picsum.photos/152/150',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        name: 'Lorem dolor.'
    },
     {
        id: 5,
        img: 'https://picsum.photos/150/151',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        name: 'Lorem dolor.'
    },
    
]

function Testimonial() {
    const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-[var(--primary)]'>What our customers are saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in quisquam omnis.</p>
            </div>
            {/* Testimonials card */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {testimonials.map((data) => (
                        <div key={data.id} className='px-3'>
                            <div
                            
                            className="flex flex-col shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-[var(--primary)]/10 relative"
                            >
                                <div className='mb-4'>
                                    <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                                </div>
                                <div>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-500 dark:text-white'>{data.text}</p>
                                        <h1 className='text-xl font-bold dark:text-white text-black/80 dark:text-light'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 dark:text-white text-9xl font-serif absolute top-0 right-0'>"</p>
                            </div>
                        </div>
                        
                    ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial