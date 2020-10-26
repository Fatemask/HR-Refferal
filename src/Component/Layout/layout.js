import React from 'react';
import NavBar from '../Nav/Nav';
import AplicantList from '../AplicantList/AplicantList';
import SignUp from '../signup/signup';
import Login from '../login/login';
import Apply from '../Apply/apply';

const Layout =(props)=>{
    return (
        <div>
            <AplicantList/>
            {/* <SignUp /> */}
            {/* <Login />
            <Apply/> */}
        </div>
    );
}

export default Layout;