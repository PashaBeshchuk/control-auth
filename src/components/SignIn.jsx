import React from 'react';
import { connect } from 'react-redux';
import { updateAuth } from '../redux/state-reducer';
import {Redirect} from "react-router-dom";

const SignIn = ({ updateAuth, auth }) => {
    if(auth) {   
        return <Redirect to="/users"/>
    }
    const entrance = () => {
        updateAuth(true)
    }
    return <div className="container col-6">
        <h1 className="text-center">Sign in</h1>
       <div className="container col-2">
           <button className="btn btn-danger" onClick={entrance}>Sign in</button>
       </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        auth:state.stateReducer.auth
    }
}


export default connect(mapStateToProps, {updateAuth})(SignIn);