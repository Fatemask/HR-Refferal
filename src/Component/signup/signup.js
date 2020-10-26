import React from 'react';
import './Signup.css';

const signup =()=>{
    return(<div>
         <div className="page">
            <div className="container">
                <div className="left">
                    <div className="signup">Sign Up</div>
                    <div className="text-left">Sign up here and be a part of the exciting adventure</div>
                </div>
                <div className="right">
                    {/*<svg viewBox="0 0 320 300">
                        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                    </svg>*/}
                    <div class="form">
                        <label for="email">Email</label>
                        <input type="email" id="email"/>
                        <label for="password">Password</label>
                        <input type="password" id="password"/>
                        <input type="submit" id="submit" value="Submit"/>
                        {/*<button id="submit" type="submit" class="btn btn-secondary btn-sm">Submit</button>*/}
                    </div>
                </div>
            </div>
        </div> 
    </div>);
}

export default signup;