import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { incAction } from '../common/state/actions/incAction'
import { increment } from '../common/state/reducers/counterSlice'
// import { add } from '../common/state/reducers/todoSlice'
import { useCallback, useEffect, useRef } from 'react'
import { getAllUsers } from '../common/state/reducers/userSlice'
import { Input } from '../components/Input'
import { Table } from '../components/Table'
import { Formik } from 'formik'

const Home = () => {
    return (
        <div className="center">
            <h1>Home</h1>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Home
