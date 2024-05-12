import { useState } from 'react'
import styles from './style.module.css'
import { useForm } from './hook'

const LoginForm = () => {
    const { error, values, handleSubmit, handleChange } = useForm()
    return (
        <div className="center">
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Username"
                    className={styles.input}
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                    value={values.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
                <span className={styles.error}>{error}</span>
            </form>
        </div>
    )
}

export default LoginForm
