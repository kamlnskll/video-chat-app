import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import dayjs from 'dayjs'
import JoinCall from '../components/JoinCall'
import Calendar from 'react-calendar'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import CreateRoom from '../components/CreateRoom'
import { New } from '../static/icons/New'
import { Call } from '../static/icons/Call'
import { CalendarIcon } from '../static/icons/Calendar'

const Dashboard = () => {
  const time = dayjs().format('hh:mm')
  const date = dayjs().format('dddd, MMMM DD, YYYY')
  const navigate = useNavigate()
  let uuidv4: string = uuid()
  const [toggleJoinCall, setToggleJoinCall] = useState(false)

  const handleJoinCallModalToggle = (boolean: any) => {
    setToggleJoinCall(boolean)
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex w-2/3 mx-auto justify-around mt-12 relative'>
        <div className='absolute z-10 top-1/3'>
          <JoinCall
            isOpen={toggleJoinCall}
            toggleFunction={handleJoinCallModalToggle}
          />
        </div>
        <div className='grid grid-cols-2 grid-rows-2 bg-gray-100 dark:bg-slate-800 dark:text-white rounded-lg'>
          <div className='bg-orange-400 m-2 rounded-xl border border-slate-400 cursor-pointer hover:bg-orange-500 relative'>
            <div className='text-white text-center font-bold text-xl absolute top-1/3 left-1/3'>
              <New />
              <CreateRoom />
            </div>
          </div>
          <div
            className='col-span-1 row-span-1 hover:bg-blue-700 bg-blue-600 m-2 rounded-xl border border-slate-400 cursor-pointer relative'
            onClick={() => {
              setToggleJoinCall(!toggleJoinCall)
            }}
          >
            <div className='text-white text-center font-semibold text-xl absolute top-1/3 left-1/3'>
              <Call />
              <h1>Join a call</h1>
            </div>
          </div>
          <div className='col-span-1 row-span-1 hover:bg-blue-700 bg-blue-600 m-2 rounded-xl border border-slate-400 relative'>
            <div className='text-white text-center font-semibold text-xl absolute top-1/3 left-1/3'>
              <CalendarIcon />
              <h1>Calendar</h1>
            </div>
          </div>
          <div className='col-span-1 row-span-1 hover:bg-blue-700 bg-blue-600 m-2 rounded-xl border border-slate-400'>
            <svg />
            <h1 className='text-white text-center font-semibold text-xl'>
              Test
            </h1>
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg dark:bg-slate-800 dark:text-white'>
          <div>
            <div className='relative'>
              <img
                alt={'test pattern for development'}
                src={
                  'https://img.freepik.com/free-vector/halftone-background-abstract-black-white-dots-shape_314614-1558.jpg?w=2000'
                }
                className='w-full h-[275px] object-contain'
              />
              <div className='absolute top-1/3 left-1/3'>
                <h1 className='text-5xl text-center dark:text-black'>{time}</h1>
                <h1 className='mt-8 text-center font-medium dark:text-black'>
                  {date}
                </h1>
              </div>
            </div>
          </div>
          <div className='h-[275px]'>
            <div className='w-2/3 mx-auto text-center mt-5'>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
