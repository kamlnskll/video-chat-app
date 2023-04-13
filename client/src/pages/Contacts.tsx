import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { userContext } from '../context/auth'
import ContactCard from '../components/ContactCard'

const Contacts = () => {
  const { userData, setUserData } = useContext(userContext)

  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border bg-white w-[500px] h-[500px] mt-12 relative'>
        <h1 className='text-center font-semibold text-xl mt-4'>{`Contacts (${userData?.contacts?.length})`}</h1>
        <button
          type='button'
          className='border px-2 text-sm text-white rounded-lg font-semibold bg-orange-600 absolute top-5 right-4'
        >
          Add Contact
        </button>
        <div className='mt-10'>
          {userData?.contacts?.map((contact: Object) => {
            return <ContactCard contact={contact} />
          })}
          <h1>Contact Cards Mapped Here</h1>
        </div>
      </div>
    </div>
  )
}

export default Contacts
