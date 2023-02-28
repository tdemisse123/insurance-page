import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './App'


const PrivateRoute = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        isAuth ? <Outlet /> : <Navigate to='/' />

    )
}
export default PrivateRoute