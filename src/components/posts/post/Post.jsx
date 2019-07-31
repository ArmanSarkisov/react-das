import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Post extends Component {
    state = {
        post: {

        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(post => {
                this.setState({ post });
                console.log(post);
            });
    }

    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.post.userId}</td>
                        <td>{this.state.post.id}</td>
                        <td>{this.state.post.title}</td>
                        <td>{this.state.post.body}</td>
                        <td>
                            <NavLink to={`/user/${this.state.post.id}`}>
                                open this user
                            </NavLink>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Post;