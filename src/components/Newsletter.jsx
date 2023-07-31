import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
              <div className='flex-col sm:flex-row justify-between w-full'>
                <input className='p-3 flex w-full rounded-md  text-black'  type='email' placeholder='Enter email' />
                <button className='bg-green-700 text-white rounded-md font-medium w-[150px] ml-4 my-6 px-6 py-3 '>Notify me</button>
              </div>
        <p>We care about the protection of your data. Read our <span className='text-green-700'>privacy policy</span> </p>
            </div>

        </div>

    </div>
  )
}

export default Newsletter