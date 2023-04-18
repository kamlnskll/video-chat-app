import React, { useEffect, useState } from 'react'
import { searchUsers } from '../axios/userRoutes'

const UserSearch = () => {
  const [query, setQuery] = useState('')
  const DEBOUNCE_DELAY = 500
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [search, setSearch] = useState([])
  const [results, setResults] = useState([])

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
      <div>
        {search.map((user: any) => (
          <div>
            <h1>{user?.userName}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserSearch
