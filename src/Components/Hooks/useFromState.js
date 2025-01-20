import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState( defaultValue );

    const getElementValue = e => {
        setValue(e.target.value)

    }
    return [value, getElementValue]
}
export default useInputState;