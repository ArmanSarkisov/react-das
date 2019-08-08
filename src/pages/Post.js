import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as postActions from '../store/about/actions';


class Post extends Component {
   

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(post => {
                this.props.onSetPost(post)
            })
    }

    render() {
        console.log(this.props);
        return (
            <Row>
                <Col md="4">
                    {this.props.post.title}
                </Col>
                <Col md="4">
                    {this.props.post.body}
                </Col>
                <Col md="4">
                    <NavLink to={`/user/${this.props.post.userId}`}>
                        Load owner
                    </NavLink>
                </Col>
            </Row>
        )
    }
}

function stateToProps(state) {
    return {
        post: state.about.post
    }
}

function dispatchToProps(dispatch) {
    return {
        onSetPost: (post) => dispatch(postActions.setPost(post)),
    }
}

export default connect(stateToProps, dispatchToProps)(Post);