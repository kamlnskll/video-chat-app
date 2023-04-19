import axios from 'axios'

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
}

export const loginUser = async (userName: string, password: string) => {
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
    throw err
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

export const addContact = async () => {
  const payload = {}

  try {
    const contact = await axios
      .post(`http://localhost:8000/api/user/addcontact`, payload)
      .then((res) => console.log(res))
    return contact
  } catch (err) {
    console.log(err)
  }
}

export const removeContact = async () => {
  const payload = {}
  try {
    const contact = await axios
      .post(`http://localhost:8000/api/user/removecontact`, payload)
      .then((res) => console.log(res))
    return contact
  } catch (err) {
    console.log(err)
  }
}
