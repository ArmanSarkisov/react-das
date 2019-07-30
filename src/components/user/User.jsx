import React, { Component } from 'react';
class User extends Component {
    state = {
        user: {

        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(user => {
            this.setState({ user });
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
            </div>
        )
    }
}

export default User;