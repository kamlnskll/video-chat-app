import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserContext'

export const useLogout = () => {
  //@ts-ignore
  const { dispatch } = useUserContext()
  const navigate = useNavigate()

  const logout = () => {
    // Remove stored token and dispatch logout to context, then navigate
    localStorage.removeItem('token')
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}
