
import React, { Component } from 'react';
import  Home  from './Layout/layout';
import  Apply  from './Apply/apply';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './Nav/Nav';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './signup/signup';
import Login from './login/login';
class Main extends Component {
  render() {
    const SignUpPage = () => {
      return <Signup />;
    };

    const LoginRoute = () => {
      return <Login />;
    };

    const HomePage =()=>{
        return <Home/>;
    }

    const ApplyPage = () =>{
        return <Apply/>;
    }


    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LoginRoute} />
          <Route path='/apply' component={ApplyPage} />
          <Route path='/signup' component={SignUpPage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
