import React, { useEffect, useState } from 'react'
import { addContact, removeContact, searchUsers } from '../axios/userRoutes'
import { Add } from '../static/icons/Add'

const UserSearch = () => {
  const DEBOUNCE_DELAY = 800
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [search, setSearch] = useState([])

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
    <div>
      <input
        name='search'
        placeholder='Search'
        type='text'
        className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4 mt-6'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {search.map((user: any) => (
          <div className='border w-3/4 py-1 rounded-lg text-sm mx-auto flex relative'>
            <h1
              className='absolute right-3 top-2 opacity-80 hover:bg-gray-200 cursor-pointer rounded-lg p-1 text-green-600 hover:opacity-100'
              onClick={() =>
                // console.log(user.userName)
                addContact(user.userName).then((res) => console.log(res))
              }
            >
              <Add />
            </h1>
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
        ))}
      </div>
    </div>
  )
}

export default UserSearch
