import React, { Component } from "react";
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

import * as aboutActions from '../store/about/actions';

class About extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        this.props.onFetchPosts()
    }
    render() {
        if(this.props.isLoading) {
            return <Loader />
        }
        return (
            <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>
                                        <NavLink to={`/post/${post.id}`}>
                                            Load Cureent
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
        )
    }
}

function stateToProps(state) {
    return {
        posts: state.about.posts,
        isLoading: state.ui.loading
    }
}

function dispatchToProps(dispatch) {
    return {
        onFetchPosts: (posts) => dispatch(aboutActions.fetchPosts(posts))
    }
}

export default connect(stateToProps, dispatchToProps)(About);