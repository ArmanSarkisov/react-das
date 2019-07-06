import React from 'react';
import s from './Header.module.css'
import { Button } from 'reactstrap';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Button onClick={props.onToggleHandler} type="button" color="primary">
                burger
            </Button>
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