import axios from 'axios'
import validator from 'validator'

// @ts-ignore
const token = JSON.parse(localStorage.getItem('token'))

axios.defaults.headers.common = { Authorization: `Bearer ${token}` }

export const registerNewUser = async (
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string
) => {
  if (
    firstName &&
    lastName &&
    userName &&
    email &&
    password &&
    validator.isEmail(email) &&
    validator.isLength(password, { min: 6, max: 18 }) &&
    validator.isLength(userName, { min: 3, max: 32 })
  ) {
    try {
      await axios
        .post(`http://localhost:8000/api/user/register`, {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response.data)
          const token = response.data.token
          // Save user json data to localStorage
          localStorage.setItem('token', JSON.stringify(token))
          return response
        })
    } catch (error) {
      console.log('This is the error', error)
    }
  } else {
    console.log('Please make sure you properly fill out the fields.')
  }
}

export const loginUser = async (userName: string, password: string) => {
  // if ('') {
  try {
    await axios
      .post(`http://localhost:8000/api/user/login`, {
        userName: userName,
        password: password,
      })
      .then(function (response) {
        console.log(response.data)
        const token = response.data.token
        // // Save user json data to localStorage
        localStorage.setItem('token', JSON.stringify(token))
        return response.data
      })
  } catch (err) {
    console.log(err)
    // }
  }
}

export const fetchUserData = async () => {
  try {
    const data = await axios.get(`http://localhost:8000/api/user/fetchuserdata`)
    return data.data
  } catch (err) {
    throw err
  }
}

export const fetchProfile = async (userName: string | undefined) => {
  try {
    const data = await axios.get(
      `http://localhost:8000/api/user/fetchprofile/${userName}`
    )
    return data.data
  } catch (err) {
    throw err
  }
}

export const searchUsers = async (searchTerm: string) => {
  try {
    const response = await axios.post(`http://localhost:8000/api/user/search`, {
      searchTerm,
    })
    const results = response.data
    // Update the component state with the search results
    return results
  } catch (error) {
    console.error(error)
  }
}

export const addContact = async (username: string | undefined) => {
  try {
    const contact = await axios
      .post(`http://localhost:8000/api/user/addcontact/${username}`)
      .then((res) => console.log('addcontact', res))
    return contact
  } catch (err) {
    console.log(err)
  }
}

export const removeContact = async (username: string | undefined) => {
  try {
    const contact = await axios
      .post(`http://localhost:8000/api/user/removecontact/${username}`)
      .then((res) => console.log(res))
    return contact
  } catch (err) {
    console.log(err)
  }
}

export const updateUser = async (
  firstName: any,
  lastName: any,
  userName: any,
  bio: any
) => {
  try {
    const data = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      bio: bio,
    }

    const updatedUser = await axios.put(
      `http://localhost:8000/api/user/editaccount`,
      data
    )

    return updatedUser.data
  } catch (err) {
    console.log(err)
  }
}
