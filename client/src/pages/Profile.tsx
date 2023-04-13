import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { fetchProfile } from '../axios/userRoutes'
import { useParams } from 'react-router-dom'

type ProfileProps = {
  isMe: boolean
  // userName: string
}

const Profile = ({ isMe }: ProfileProps) => {
  const { userName } = useParams()
  const [profileData, setProfileData] = useState<any>({})

  useEffect(() => {
    fetchProfile(userName).then((res) => {
      setProfileData(res)
      console.log(res)
    })
  }, [userName])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='bg-white border rounded-lg w-[500px] h-[250px] mx-auto mt-28 pt-4'>
        <h1 className='text-center font-semibold text-md'>Profile</h1>
        <div className='flex justify-center gap-12 mt-4'>
          <div className=''>
            <img
              alt='user profile pic'
              className='w-[75px] h-[75px] rounded-full'
              src={profileData.profilePic}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-semibold'>{profileData.userName}</h1>
            <h1 className='text-sm'>
              {profileData.firstName} {profileData.lastName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
