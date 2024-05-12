import { useDispatch } from 'react-redux'
import { logout } from '../../common/state/reducers/authSlice'

const Profile = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="center">
            <h1>Profile</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile
