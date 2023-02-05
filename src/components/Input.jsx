import React, { useState } from 'react'

const Input = () => {

    const [ input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange} name='textInput' value={input} type='text' className='mx-4 h-8 border px-2 text-black bg-red-100 rounded-sm'  placeholder='Text Element'/>
            {input}
        </>
    )
}

export default Input