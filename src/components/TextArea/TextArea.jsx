import { memo, useEffect } from 'react'

const TextArea = memo(({ value }) => {
    return <textarea value={value} />
})

TextArea.displayName = 'TextArea'

export default TextArea
