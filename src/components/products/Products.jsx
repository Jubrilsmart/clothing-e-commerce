import React from 'react'
import { FaStar } from 'react-icons/fa';
import IMG1 from "../../assets/website/arab.jpg";
import IMG2 from "../../assets/website/shopping.jpg";
import IMG3 from "../../assets/website/studio.jpg";
import IMG4 from "../../assets/website/girlat.jpg";
import IMG5 from "../../assets/website/girl.png"
const productsData = [
    {
        id: 1,
        img: IMG1,
        title: "Shopping girl",
        rating: 4.0,
        color: "white",
        aosDelay: 200
    },
    {
        id: 1,
        img: IMG2,
        title: 'Jean shopping',
        rating: 4.5,
        color: "black",
        aosDelay: 200
    },
    {
        id: 1,
        img: IMG3,
        title: 'Classy shirt',
        rating: 4.7,
        color: "orange",
        aosDelay: 200
    },
    {
        id: 1,
        img: IMG4,
        title: 'Summer shirt',
        rating: 5.0,
        color: "orange",
        aosDelay: 200
    },
    {
        id: 1,
        img: IMG5,
        title: '',
        rating: 5.0,
        color: "white",
        aosDelay: 200
    }
]

function Products() {
  return (
    <div className='mt-14 mb-12'>
        <div className='container mx-auto'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-[var(--primary)]'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in quisquam omnis.</p>
            </div>
            {/* Body Section */}
            <div >
                <div className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* Card Section */}
                    {productsData.map((data) => (
                        <div 
                        data-aos="fade-up" data-aos-delay={data.aosDelay}
                        key={data.id} className='space-y-3'>
                            <img src={data.img} alt=""
                            className='h-[220px] w-[150px] object-cover rounded-md'
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* view all Button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-[var(--primary)] text-white py-1 px-5 rounded-md'>
                       View all Products
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products