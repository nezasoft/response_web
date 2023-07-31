import React from 'react'
import ReactTyped from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col'>
            <p className='text-green-700 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl'>Fast, flexible financing for </p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['BTB','BTC','SAS']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SAS platforms.</p>
            <button className='bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero