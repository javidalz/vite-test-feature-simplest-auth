import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { tokenSelector } from './common/state/selectors/authSelector'

const ProtectedRoute = () => {
    const token = useSelector(tokenSelector)

    if (!token) return <Navigate to="/login" replace />
    return <Outlet />
}

export default ProtectedRoute
