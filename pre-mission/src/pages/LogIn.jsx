import React from 'react';
import SignIn from '../components/SignIn';
import { Link } from 'react-router-dom';

const LogIn = () => {
    
    return (
        <>
            <div>
                <Link to='/'></Link>
                <SignIn />
            </div>
        </>
    )
}

export default LogIn;