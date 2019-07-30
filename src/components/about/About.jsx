import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Route, NavLink } from 'react-router-dom';

class Contact extends Component {

    state = {
        users: [],
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((users) => {
                this.setState({ users });
            });
    }





    render() {
        let user = this.state.users.map(user => ( // ete chunenq id karanq 2-rd argument tand index u key index

            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>

                    <NavLink to={`/user/${user.id}`}>Load Current User</NavLink>

                </td>
            </tr>

        ))
        return (
            <>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user}
                    </tbody>
                </Table>
            </>
        )
    }

}

export default Contact;






// { useState }


// const [value, changeValue] = useState("test value");

    // const handleChangeValue = (e) => {
    //     changeValue(e.target.value);
    // }
    // <div>
    //             {/* <p>inputi mej graca: {value}</p>
    //             <input type="text" value={value} onChange={handleChangeValue}/> */}
    //         </div>