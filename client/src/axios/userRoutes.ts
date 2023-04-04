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
        // const token = response.data.token
        // // Save user json data to localStorage
        // localStorage.setItem('token', JSON.stringify(token))
        // return response
      })
  } catch (error) {
    console.log('This is the error', error)
  }
}

export const loginUser = async (userName: string, password: string) => {
  await axios
    .post(`http://localhost:3000/api/user/login`, {
      userName: userName,
      password: password,
    })
    .then((res) => {
      return res.data
    })
}
