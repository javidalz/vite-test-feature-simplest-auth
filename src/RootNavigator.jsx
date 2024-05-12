import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CheckList from './pages/CheckList'
import LoginForm from './pages/LoginForm'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'
import { tokenSelector } from './common/state/selectors/authSelector'
import ProtectedRoute from './ProtectedRoute'

const RootNavigator = () => {
    const token = useSelector(tokenSelector)

    console.log('token', token)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/check" element={<CheckList />} />
                <Route path="/loginform" element={<LoginForm />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<SinglePost />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route
                    path="/login"
                    element={
                        token ? <Navigate to="/profile" replace /> : <Login />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default RootNavigator
