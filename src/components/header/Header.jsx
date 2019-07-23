import React from 'react';
import s from './Header.module.css'
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.replace('/login');
      }
    
    console.log(props);
    return (
        <header className={s.header}>
            <Container fluid>
                <Row className={s.header_row}  >
                    <Col md="1">
                        <div onClick={props.onToggleHandler} className={s.burger_container}>
                            <div className={s.bar1}></div>
                            <div className={s.bar2}></div>
                            <div className={s.bar3}></div>
                        </div>
                    </Col>
                    <Col md="11">
                        <nav className={s.navigation}>
                            <ul>
                                <li><NavLink to="/content" activeClassName="active">home</NavLink></li>
                                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                                <li><NavLink to="/contact" activeClassName="active">contact</NavLink></li>
                            </ul>
                        </nav>
                        <Button
                            color="primary"
                            type="submit"
                            onClick={handleLogout}
                        >
                            Log out
                         </Button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}


export default Header;