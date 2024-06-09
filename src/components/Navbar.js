import React, { Component } from 'react';
import logo from './images/logo192.png';


class Navbar extends Component {
    render() {
        return (
            <div className='contain'>
                <div className='side-panel'>
                    <img className="head-logo" src={logo} alt='Logo'/>
                    
                </div>
                <div className='main-head'>
                    <div>

                    </div>
                    <div className='Log-Sign'>
                        <button style={{margin:"20px 20px 0px 0px"}} className='login'>LOG IN</button>
                        <button style={{margin:"20px 20px 0px 0px"}} className='sign-up'>SIGN UP</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;