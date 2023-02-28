import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './App'


const ProtectedRoute = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        !isAuth ? <Outlet /> : <Navigate to='/home' />

    )
}
export default ProtectedRoute