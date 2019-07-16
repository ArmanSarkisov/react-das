import React from 'react';

import { withiRouter } from 'react-router-dom';


class Login extends React.Component {
    render() {
        return(
            <div>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <button>login</button>
            </div>
        )
    }
}

export default Login;