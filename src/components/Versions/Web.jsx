import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';


import withMobileSize from './withMobileSize';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Web = (props) => {
    return (
        <Header onToggleHandler={this.handelOnToggle} />
        <div>
            <Row>
                {this.state.isSideBarVisiable && (
                    <Col md="3">
                        <Sidebar />
                    </Col>
                ) || (
                        <Col md="1">
                            <Sidebar />
                        </Col>
                    )}
                <Row>
                    <Col md={this.state.isSideBarVisiable ? 9 : 11}>
                        <Content>
                            <Route component={Contact} path="/contact" />
                            <Route component={About} path="/about" />
                            <Redirect from="*" to="/content" />
                        </Content>
                    </Col>
                    <Col md={this.state.isSideBarVisiable ? 9 : 11}>
                        <Footer />
                    </Col>
                </Row>
            </Row>
        </div>
    )
}


export default Web;