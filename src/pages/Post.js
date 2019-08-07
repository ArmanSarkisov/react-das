import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as postActions from '../store/posts/action';


class Post extends Component {
    state = {
        post: {

        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(post => {
                this.props.onSetPost({ post })
            })
    }

    render() {
        console.log(this.props);
        return (
            <Row>
                <Col md="4">
                    {this.state.post.title}
                </Col>
                <Col md="4">
                    {this.state.post.body}
                </Col>
                <Col md="4">
                    <NavLink to={`/post/${this.props.post.id}`}>
                        Load owner
                    </NavLink>
                </Col>
            </Row>
        )
    }
}

function stateToProps(state) {
    return {
        users: state.post.post
    }
}

function dispatchToProps(dispatch) {
    return {
        onSetPost: (post) => dispatch(postActions.setPost(post)),
    }
}

export default connect(stateToProps, dispatchToProps)(Post);