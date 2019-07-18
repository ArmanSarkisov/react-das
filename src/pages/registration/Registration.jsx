import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const required = (value) => value.length > 0;
const isEmail = (value) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
const notIsUnique = (arrUsers, email) => !!arrUsers.find(user => user.email === email);

class Registration extends Component {
    state = {
        email: '',
        password: '',
    }
    constructor(props) {
        super(props);
        this.handleOnSubmitReg = this.handleOnSubmitReg.bind(this);
        this.handleOnSubmitChange = this.handleOnSubmitChange.bind(this);
    }

    handleOnSubmitChange(e) {
        e.persist();  // vor eventnere chxarnven irar 
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleOnSubmitReg(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;
        if (required(email) && (required(password) && isEmail(email))) {
            try {
                let users = localStorage.getItem('users');
                if (!users) {
                    localStorage.setItem('users', JSON.stringify([]));
                    users = localStorage.getItem('users');
                }
                users = JSON.parse(users);
                if(!notIsUnique(users, email)) {
                    users.push({ email, password })
                    localStorage.setItem('users', JSON.stringify(users));
                    history.push('/login')
                }
            } catch (e) {
                console.log(e);
            }
        } else {

        }

    }


    render() {
        const { email, password } = this.state;
        // localStorage.clear();
        return (
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form onSubmit={this.handleOnSubmitReg}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="input your email"
                                    onChange={this.handleOnSubmitChange}
                                    value={email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="input your password"
                                    onChange={this.handleOnSubmitChange}
                                    value={password}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    type="submit"
                                    color="primary"
                                    outline
                                    onClick={this.handleOnNavigate}
                                >
                                    Registeration
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Registration;
