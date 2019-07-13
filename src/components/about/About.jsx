import React, { useState } from 'react';

const Contact = (props) => {

    const [value, changeValue] = useState("test value");

    const handleChangeValue = (e) => {
        changeValue(e.target.value);
    }
    
    return(
        <div>
            <p>inputi mej graca: {value}</p>
            <input type="text" value={value} onChange={handleChangeValue}/>
        </div>
    )
}

export default Contact;