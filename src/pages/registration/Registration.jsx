import React, { Component } from 'react';

import s from './Registration.module.css';

import { } from 'reactstrap';

class Registration extends Component {


    render() {
        return (
            <div className={s.registration}>
                <div className={s.reg_title}>
                    <h2>registration</h2>
                </div>
                <div className={s.form}>
                    <form action="#">
                        <input type="text" placeholder="Name" onChange={this.handleChange} />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.handleChange}>registration</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Registration;
