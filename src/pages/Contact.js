import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

import * as aboutActions from '../store/about/actions';

class Contact extends Component {
    componentDidMount(id) {
        // const id = this.props.post.id || this.props.match.params.postId;
        this.props.onFetchComments(id);
    }

    render() {
        if (this.props.isLoading) {
            return <Loader />
        }
        console.log(this.props);
        return (
            <div>
                Contact
            </div>
        )
    }
}

function stateToProps(state) {
    return {
        post: state.about.post,
        comments: state.about.comments
    }
}

function dispatchToProps(dispatch) {
    return {
        onFetchComments: id => dispatch(aboutActions.fetchComments(id))
    }
}

export default connect(stateToProps, dispatchToProps)(Contact);
