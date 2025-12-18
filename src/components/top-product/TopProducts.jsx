import React from 'react'
import { FaStar } from 'react-icons/fa';
import IMG1 from "../../assets/shirt/shirt1.png";
import IMG2 from "../../assets/shirt/shirt2.png";
import IMG3 from "../../assets/shirt/shirt4.png";

const productsData = [
  {
    id: 1,
    img: IMG1,
    title: "Upto 50% off on all Men's wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident incidunt perferendis est voluptatibus in?"
  },
  {
    id: 2,
    img: IMG2,
    title: "Upto 50% off on all Kids wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellat temporibus cumque voluptas."
  },
  {
    id: 3,
    img: IMG3,
    title: "70% Sale on All Electronics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure voluptatem quidem iste."
  }
];


function TopProducts({ handleOrderPopup }) {
  return (
    <div>
        <div className='container mx-auto'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto mb-24'>
                <p data-aos="fade-up" className='text-sm text-[var(--primary)]'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in quisquam omnis.</p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>    
            {productsData.map((data) => (
                <div 
                data-aos="zoom-in"
                key={data.id} className='space-rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:bg-[var(--primary)]
                hover:text-white relative shadow-xl duration-high group max-w-[300px] flex flex-col'>
                  {/* image-section */}
                    <div className='h-[100px]'>
                       <img src={data.img} alt=""
                    className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                    /> 
                    </div>
                    {/* detail section */}
                    <div className='p-4 text-center'>
                      {/* star rating */}
                      <div className='w-full flex items-center justify-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                      </div>
                      <h1 className='text-xl font-bold'>{data.title}</h1>
                      <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                      <button className=" bg-[var(--primary)] hover:scale-105 duration-200 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[var(--primary)]" 
                        onClick={() => handleOrderPopup()}
                      >
                        Order Now
                      </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts