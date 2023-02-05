import React, { useState } from 'react'

const Checkbox = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                <input
                    name="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    className='p-2 mx-1'
                />
                My Value
            </label></div>
    )
}

export default Checkbox