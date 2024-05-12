import styles from './styles.module.css'

export const Button = (props) => {
    const { ...rest } = props

    return <button className={styles.button} {...rest} />
}
