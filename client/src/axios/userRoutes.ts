import axios from 'axios'

export const registerNewUser = async (firstName: string, lastName: string, userName: string, email: string, password: string) => {
const data = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    password: password
}

await axios.post(`http://localhost:3000/api/user/register`, { data }).then((res) => {
    return res.data
})

}

export const loginUser = async (userName: string, password: string) => {
    const data = {
        userName: userName,
        password: password
    }

    await axios.post(`http://localhost:3000/api/user/login`, { data }).then((res) => {
        return res.data
    })



}