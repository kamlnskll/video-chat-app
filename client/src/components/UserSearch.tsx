import React, { useContext, useEffect, useState } from 'react'
import { addContact, removeContact, searchUsers } from '../axios/userRoutes'
import { Add } from '../static/icons/Add'
import { userContext } from '../context/auth'
import { Added } from '../static/icons/Added'
import { useNavigate } from 'react-router-dom'

const UserSearch = () => {
  const navigate = useNavigate()
  const DEBOUNCE_DELAY = 800
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [search, setSearch] = useState([])
  const { userData } = useContext(userContext)

  useEffect(() => {
    console.log(userData)
    console.log(userData.contacts.includes(userData._id))
  }, [])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, DEBOUNCE_DELAY)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchTerm])

  useEffect(() => {
    searchUsers(debouncedSearchTerm).then((res) => setSearch(res))
  }, [debouncedSearchTerm])

  useEffect(() => {
    if (debouncedSearchTerm === '') {
      setSearch([])
      return
    }
  }, [debouncedSearchTerm])

  return (
    <div onClick={() => console.log(search)}>
      <input
        name='search'
        placeholder='Search'
        type='text'
        className='flex mx-auto w-3/4 h-[50px] outline-none border-gray-100 border bg-gray-100 rounded-lg text-xs placeholder:font-semibold pl-6 mb-4 mt-6'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {search.map((user: any) => (
          <div className='mt-2'>
            <div className='border border-gray-100 w-3/4 py-1 rounded-lg text-sm mx-auto flex relative'>
              <div className={user._id === userData._id ? `hidden` : ``}>
                {user.contacts.includes(userData._id) ? (
                  <h1
                    className='absolute right-3 top-2 opacity-80 hover:bg-gray-200 cursor-pointer rounded-lg p-1 text-green-600 hover:opacity-100'
                    onClick={() => navigate(`/profile/${user.userName}`)}
                  >
                    <Added />
                  </h1>
                ) : (
                  <h1
                    className='absolute right-3 top-2 opacity-80 hover:bg-gray-200 cursor-pointer rounded-lg p-1 text-blue-600 hover:opacity-100'
                    onClick={() =>
                      // console.log(user.userName)
                      addContact(user.userName).then((res) => console.log(res))
                    }
                  >
                    <Add />
                  </h1>
                )}
              </div>
              <div className=''>
                <img
                  className='w-[30px] h-[30px] ml-6 mt-2'
                  src={user?.profilePic}
                  alt={`${user?.userName}'s profile pic`}
                />
              </div>
              <div className='ml-8'>
                <h1>{user?.userName}</h1>
                <h1>
                  {user?.firstName} {user?.lastName}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserSearch
