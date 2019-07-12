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


function Mobile(props) {
    return (
        <Container fluid>
            <Header onToggleHandler={props.handleOnToggle} />
            <Row>
                {
                    props.isVisible && (
                        <Col md="6">
                            <SideBar />
                        </Col>
                    )
                }
                <Col md={props.isVisible ? 6 : 12}>
                    <Switch>
                        <Content>
                            <Route exact component={Content}  path="/" />
                            <Route component={About} path="/about" />
                            <Route component={Contact} path="/contact" />
                            <Redirect from="*" to="/" />
                        </Content>
                    </Switch>
                    <Footer  />
                    <h2>hello mobile version</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Mobile;