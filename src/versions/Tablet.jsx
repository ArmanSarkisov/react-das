import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Content from '../components/content/Content';
import SideBar from '../components/sidebar/Sidebar';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';

import s from './Tablet.module.css';

function Tablet(props) {
    return (
        <Container fluid>
            <Header onToggleHandler={props.handleOnToggle} />
            <Row>
                {
                    props.isVisible ? (
                        <Col sm="4">
                            <SideBar />
                        </Col>
                    ) : (
                        <Col sm="2">
                            <SideBar />
                        </Col>
                    )
                }
                <Col sm={props.isVisible ? 8 : 10}>
                    <Switch>
                        <Content>
                            <Route exact component={Content}  path="/" />
                            <Route component={About} path="/about" />
                            <Route component={Contact} path="/contact" />
                            <Redirect from="*" to="/" />
                        </Content>
                    </Switch>
                    <Footer  />
                    <h2 className={s.tablet}>hello tablet version</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Tablet;