import React from 'react'
import Navbar from '../components/Navbar'
import dayjs from 'dayjs'

const Dashboard = () => {
  const time = dayjs().format('h:mm')
  const date = dayjs().format('dddd, MMMM DD, YYYY')

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex w-2/3 mx-auto justify-around mt-12'>
        <div className='grid grid-cols-2 grid-rows-2 bg-gray-100 rounded-lg p-4'>
          <div>Start a call</div>
          <div>Join a call</div>
          <div>Schedule a call</div>
          <div>Other</div>
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
                <h1 className='text-5xl'>{time}</h1>
                <h1 className='mt-8'>{date}</h1>
              </div>
            </div>
          </div>
          <div>Calender goes here</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
