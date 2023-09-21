import React from 'react';
import Navbar from '../pages/Navbar';

const Container = (props) => {
    return (
        <div className="border rounded-xl ">
            <Navbar />

            <div>{props.children}</div>
        </div>
    );
};

export default Container;
