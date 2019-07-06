import React from 'react';
import s from './Header.module.css'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Row className={s.header_row}  >
                <Col md="1">
                    <Button onClick={props.onToggleHandler} type="button" color="primary">
                        burger
                    </Button>
                </Col>
                <Col md="11">
                    <nav className={s.navigation}>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">sevices</a></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </header>
    )
}


export default Header;