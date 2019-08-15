import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import * as aboutActions from '../store/about/actions';

class Post extends Component {
    componentDidMount() {
        this.props.onFetchPost(this.props.match.params.id);
    }

    render() {
        if(this.props.isLoading) {
            return <Loader />
        }
        return (
            <Row>
                <Col md="3">
                    {this.props.post.title}
                </Col>
                <Col md="3">
                    {this.props.post.body}
                </Col>
                <Col md="3">
                    <NavLink to={`/user/${this.props.post.userId}`}>
                        Load owner
                    </NavLink>
                </Col>
                <Col md="3">
                    <NavLink to={`/contact/${this.props.post.id}`}>
                        Load comments
                    </NavLink>
                </Col>
            </Row>
        )
    }
}

function stateToProps(state) {
    return {
        post: state.about.post,
        isLoading: state.ui.loading
    }
}

function dispatchToProps(dispatch) {
    return {
        onFetchPost: (id) => dispatch(aboutActions.fetchPost(id))
    }
}

export default connect(stateToProps, dispatchToProps)(Post);
