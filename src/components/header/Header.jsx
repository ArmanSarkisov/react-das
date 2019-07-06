import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.bar1}></div>
                <div className={s.bar2}></div>
                <div className={s.bar3}></div>
            </div>
            <nav className={s.navigation}>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">sevices</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;