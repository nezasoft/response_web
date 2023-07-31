import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img  className='w-[500]  mx-auto my-4' src={laptop} alt="/" />
            <div className='flex flex-col justify-center' >
                <p className='text-green-700 font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data analytics</h1>
                <p className=''>
                Data analytics helps individuals and organizations make sense of data. Data analysts typically analyze raw data for insights and trends
                </p>
                <button className='bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>

            </div>

        </div>


    </div>
  )
}

export default Analytics