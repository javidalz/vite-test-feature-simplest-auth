import { useEffect, forwardRef } from 'react'

export const Text1 = forwardRef((props, ref) => {
    return (
        <p style={{ background: 'blue' }}>
            <span> {props.children}</span>
            <span ref={ref}>aaa</span>
        </p>
    )
})
