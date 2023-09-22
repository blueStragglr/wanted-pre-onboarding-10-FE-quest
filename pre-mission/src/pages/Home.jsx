import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <div>
                <ul>
                    <li>Home</li>
                    <li><Link to='/login'>LogIn</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Home;