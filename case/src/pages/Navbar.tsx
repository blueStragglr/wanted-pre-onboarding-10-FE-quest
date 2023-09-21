import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-row justify-around">
            {/* <Link to="/">홈</Link> */}
            <Link to="/member" className="border p-2  rounded-xl bg-blue-600 text-white">
                회원가입
            </Link>

            <Link to="/apicall" className="border p-2  rounded-xl">
                API
            </Link>
        </div>
    );
};

export default Navbar;
