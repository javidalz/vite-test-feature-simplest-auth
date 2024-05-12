import { useState } from 'react'
import { Checkbox } from '../../components/Checkbox'

const CheckList = () => {
    const [checked, setChecked] = useState([])

    const handleCheck = (val) => {
        if (checked.includes(val)) {
            const newArr = checked.filter((c) => c !== val)
            setChecked(newArr)
        } else {
            setChecked([...checked, val])
        }
    }

    const checkboxes = ['id1', 'id2', 'id3', 'id4']
    return (
        <div className="center">
            {checkboxes.map((c) => (
                <div key={c} className="flex">
                    <Checkbox
                        onCheck={() => handleCheck(c)}
                        checked={checked.includes(c)}
                    />
                    <span>{c}</span>
                </div>
            ))}
        </div>
    )
}

export default CheckList
