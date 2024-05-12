import { useFormik } from 'formik'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import * as yup from 'yup'
import { useEffect } from 'react'
import { login } from '../common/state/reducers/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { tokenSelector } from '../common/state/selectors/authSelector'

const Login = () => {
    // const token = useSelector(tokenSelector)

    const dispatch = useDispatch()
    const loginSchema = yup.object({
        email: yup
            .string()
            .email('Düzgün email formatı deyil')
            .required('Məcburidir'),
        password: yup
            .string()
            .min(3, 'Ən az 3 hərfdən ibarət olmalıdır')
            .max(10, 'Ən çox 10 hərfdən ibarət ola bilər')
            .required('Məcburidir'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(login(values))
        },
    })

    return (
        <div className="center">
            <form onSubmit={formik.handleSubmit} className="flex column gap-10">
                <Input
                    label="Email"
                    error={formik.touched.email && formik.errors.email}
                    placeholder="Emailinizi daxil edin"
                    {...formik.getFieldProps('email')}
                />

                <Input
                    label="Parol"
                    type="password"
                    error={formik.touched.password && formik.errors.password}
                    placeholder="Parolunuzu daxil edin"
                    {...formik.getFieldProps('password')}
                />

                <Button
                    type="submit"
                    disabled={!formik.dirty || !formik.isValid}
                >
                    Login{' '}
                </Button>
            </form>
        </div>
    )
}

export default Login
