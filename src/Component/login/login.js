import React from 'react';
import {Link} from 'react-router-dom';

const login =()=>{
    return(
        <div style={{width: '500px', marginLeft:'35vw'}}> 
           <form>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i class="fa fa-envelope"></i></span>
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i class="fa fa-lock"></i></span>
                        <input type="text" className="form-control" name="password" placeholder="Password" required="required"/>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
                </div>
                {/* <p className="hint-text">Forgot Password?</p> */}
                <p className="hint-text">Don't have an account? <Link to="/signup">Create account</Link></p>
            </form>
        </div>
    );
}

export default login;