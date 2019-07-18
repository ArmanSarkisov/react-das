import React from 'react';
import {
    Switch,
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Content from '../components/content/Content';
import SideBar from '../components/sidebar/Sidebar';
// import Contact from '../components/contact/Contact';
// import About from '../components/about/About';

function Web(props) {
    return (
        <Container fluid>
            <Header onToggleHandler={props.handleOnToggle} />
            <Row>
                {
                    props.isVisible ? (
                        <Col md="3">
                            <SideBar />
                        </Col>
                    ) : (
                            <Col md="1">
                                <SideBar />
                            </Col>
                        )
                }
                <Col md={props.isVisible ? 9 : 11}>
                    <Switch>
                        <Content>
                            {props.children}
                        </Content>
                    </Switch>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}

export default Web;