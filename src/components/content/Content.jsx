import React, { useState } from 'react';
import s from './Content.module.css'

const Content = (props) => {
    const [count, setCount] = useState(0);
    return (
        <main className={s.main}>
            <p>
                tive havasar e = {count}
                <button onClick={() => setCount(count + 1)}>Click</button>
            </p>
        </main>
    )
}


export default Content;