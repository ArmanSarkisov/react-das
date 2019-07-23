import React, { Component } from 'react';
import { Table } from 'reactstrap';


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
                        </tr>
                    </thead>
                    <tbody>
                        { user }
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