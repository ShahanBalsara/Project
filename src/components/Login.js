import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <>
                <form action='' method='get' id='log-form' className='reg-form'>
                    <h2 style={{ "textAlign": "center" }}>Login</h2>

                    <div className='input-control'>
                        <label for="email">Email: </label><br/>
                        <input type='email' name='email' id='email' />
                        <div id='error'></div>
                    </div>
                    <div className='input-control'>
                        <label for="password">Password: </label><br/>   
                        <input type='password' name='password' id='password' />
                    </div>
                    <p style={{"marginLeft":"30%","marginBottom":"0px"}}>Don't Have An Account Yet? <Link to="/signup">Create one</Link></p>
                    <button type='submit' className='sub-btn'>Login</button>
                </form>
            </>
        );
    }
}

export default Login;