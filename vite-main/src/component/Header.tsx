import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components";
const Header = () => {
    return (
        <header>
           <Ul >
           {navData.map((el,idx)=>
           <Link to ={`${routePath[el]}`} key={`${el}${idx}`}>
           <li>{el}</li>
           </Link>
           )}
            </Ul> 
        </header>
    );
};
const navData = ["페이지1","페이지2"];
interface PathType {
    [key: string]: string
    "페이지1" : string
    "페이지2" :string
}
const routePath :PathType= {
    "페이지1" : "/",
    "페이지2" : "/page/2"
}

export default Header;
const Ul = styled.ul`
display: flex;
color: black;
.li {
    font-size:5rem;
}

`;