import { useState, useEffect, useLayoutEffect, useRef } from 'react'

const useTop = () => {
    const ref = useRef(0)
    useLayoutEffect(() => {
        console.log(ref.current.getBoundingClientRect().top)
    }, [])

    return { ref }
}

export default useTop
