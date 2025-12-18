import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const PopUp = ({orderPopup, setOrderPopup}) => {
  return (
    <>
       {
        orderPopup && (
            <div className='popup'>
                <div className='h-screen w-screen dixed top-0 left-0 bg-black/50'>
                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]'>
                        {/* Header section */}
                        <div className='flex justify-between'>
                            <div className='flex items-center justify-between'>
                                <h1>Order Now</h1>
                            </div>
                            <div>
                                <IoCloseOutline className='text-2xl cursor-pointer'
                                onClick={() => setOrderPopup(false)}/>
                            </div>
                        </div>
                        
                        {/* form section */}
                        <div className='mt-8'>
                            <input type="text" placeholder='Enter Name'
                            className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                            />
                            <input type="email" placeholder='Enter Email'
                            className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                            />
                            <input type="text" placeholder='Enter Address'
                            className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                            />
                            <div className='flex justify-center'>
                                <button className=" bg-[var(--primary)] hover:scale-105 duration-200 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[var(--primary)]">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
       }  
    </>
  )
}

export default PopUp