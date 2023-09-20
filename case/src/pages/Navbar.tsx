import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between">
            {/* <Link to="/">홈</Link> */}
            <Link to="/member">회원가입</Link>
            <Link to="/apicall">API</Link>
        </div>
    );
};

export default Navbar;
