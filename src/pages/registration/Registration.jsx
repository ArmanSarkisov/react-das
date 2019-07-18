import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Registration extends Component {
    state = {
        email: '',
        password: '',
        hits: []
    }
    constructor(props) {
        super(props);
        this.handleOnSubmitReg = this.handleOnSubmitReg.bind(this);
        this.handleOnSubmitChange = this.handleOnSubmitChange.bind(this);
    }

    handleOnSubmitChange(e) {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleOnSubmitReg(e) {
        e.preventDefault();
        const { email, password } = this.state;
        localStorage.setItem('users', JSON.stringify([{email, password}]))
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
