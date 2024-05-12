import { useState, useEffect, useLayoutEffect, useRef } from 'react'


// custom Hook
const usePrevious = (value) => {
    const ref = useRef(null)

    useEffect(() => {
        console.log(ref.current)
        ref.current = value
    }, [value])

    return { previous: ref.current }
}
export default usePrevious
