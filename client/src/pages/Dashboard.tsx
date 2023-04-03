import React from 'react'
import Navbar from '../components/Navbar'
import dayjs from 'dayjs'
import JoinCall from '../components/JoinCall'

const Dashboard = () => {
  const time = dayjs().format('h:mm')
  const date = dayjs().format('dddd, MMMM DD, YYYY')

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex w-2/3 mx-auto justify-around mt-12'>
        <div className='grid grid-cols-2 grid-rows-2 bg-gray-100 rounded-lg'>
          <div className='col-span-1 row-span-1 bg-orange-400 m-2 rounded-xl border border-slate-400'>
            <svg />
            <h1 className='text-white text-center font-bold text-xl'>
              Start a call
            </h1>
          </div>
          <div className='col-span-1 row-span-1 bg-blue-600 m-2 rounded-xl border border-slate-400'>
            <svg />
            <h1 className='text-white text-center font-bold text-xl'>
              Start a call
            </h1>
          </div>
          <div className='col-span-1 row-span-1 bg-blue-600 m-2 rounded-xl border border-slate-400'>
            <svg />
            <h1 className='text-white text-center font-bold text-xl'>
              Start a call
            </h1>
          </div>
          <div className='col-span-1 row-span-1 bg-blue-600 m-2 rounded-xl border border-slate-400'>
            <svg />
            <h1 className='text-white text-center font-bold text-xl'>
              Start a call
            </h1>
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg'>
          <div>
            <div className='relative'>
              <img
                alt={'test pattern for development'}
                src={
                  'https://img.freepik.com/free-vector/halftone-background-abstract-black-white-dots-shape_314614-1558.jpg?w=2000'
                }
                className='w-[412px] object-contain border-4'
              />
              <div className='absolute top-1/3 left-1/3'>
                <h1 className='text-5xl text-center'>{time}</h1>
                <h1 className='mt-8 text-center font-medium'>{date}</h1>
              </div>
            </div>
          </div>
          <div className='h-[275px]'>Calendar</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
