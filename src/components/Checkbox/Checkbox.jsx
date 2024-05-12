import styles from './styles.module.css'

export const Checkbox = (props) => {
    const { checked = false, onCheck } = props
    return (
        <div className={styles.checkWrap}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={checked}
                onChange={onCheck}
            />
            <span className={styles.marker}></span>
        </div>
    )
}
