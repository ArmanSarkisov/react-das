import React, { useState } from 'react';
import s from './Content.module.css'

const Content = (props) => {
    // const [count, setCount] = useState(0);
    return (
        <>
            {props.children}
        </>
    )
}


export default Content;