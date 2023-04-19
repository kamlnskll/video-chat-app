import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { userContext } from '../context/auth'
import ContactCard from '../components/ContactCard'
import ContactModal from '../components/ContactModal'
import { AddPerson } from '../static/icons/Add'

const Contacts = () => {
  const { userData, setUserData } = useContext(userContext)
  const [addContactModal, setAddContactModal] = useState(false)

  const handleModalToggle = () => {
    setAddContactModal(!addContactModal)
  }

  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/3 z-10'>
        <ContactModal
          isOpen={addContactModal}
          modalHandler={handleModalToggle}
        />
      </div>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border bg-white w-[500px] h-[500px] mt-12 relative'>
        <h1 className='text-center font-semibold text-xl mt-4'>{`Contacts`}</h1>
        <h1 className='absolute top-16 left-8 font-bold text-xs'>
          ({userData?.contacts?.length})
        </h1>
        <h1
          className={
            addContactModal
              ? `hidden`
              : `border px-2 text-sm cursor-pointer border-gray-100 text-gray-700 rounded-lg font-semibold bg-gray-100 hover:bg-gray-100 absolute top-5 right-6`
          }
          onClick={() => setAddContactModal(!addContactModal)}
        >
          <AddPerson />
        </h1>
        <div className='mt-10'>
          {userData?.contacts?.map((contact: Object) => {
            return <ContactCard contact={contact} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Contacts
