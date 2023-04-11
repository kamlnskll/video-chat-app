import axios from 'axios'

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

export const fetchUserData = async (userId: any) => {
  try {
    await axios
      .get(`http://localhost/api/user/fetchuserdata`, userId)
      .then(function (response) {
        console.log(response.data)
        return response.data
      })
  } catch (err) {
    throw err
  }
}
