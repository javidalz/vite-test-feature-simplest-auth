import classNames from 'classnames'
import styles from './styles.module.css'

export const Input = (props) => {
    const { label, error, ...rest } = props
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <div className={error ? styles.inputWrapError : ''}>
                <input
                    className={`${styles.input} ${
                        error ? styles.inputError : ''
                    }`}
                    {...rest}
                />
            </div>
            <small className={styles.error}>{error}</small>
        </div>
    )
}
