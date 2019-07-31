import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((posts) => {

                this.setState({ posts });
            });

    }

    render() {
        let posts = this.state.posts.map(posts => ( 
            

            <tr key={posts.id}>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
                <td>

                    <NavLink to={`/post/${posts.id}`}>Load Current post</NavLink>

                </td>
            </tr>

        ))
        return (
            <>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Posts;