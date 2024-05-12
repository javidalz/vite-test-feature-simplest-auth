import { useState } from 'react'
import axiosInstance from '../../common/axiosInstance'

export const useForm = () => {
    const [values, setValues] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.post('login', values)
            if (response.data.token)
                localStorage.setItem('token', response.data.token)
        } catch (error) {
            setError(error.response.data.error)
        }
    }

    // KISS
    // Keep it simple and stupid

    const handleChange = (e) => {
        setError('')
        const name = e.target.name // email, password
        const value = e.target.value
        setValues({
            ...values,
            [name]: value,
        })
    }

    return { error, values, handleSubmit, handleChange }
}
