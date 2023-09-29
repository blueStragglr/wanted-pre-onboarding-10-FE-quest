import React from 'react';
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header>
           <ul>
           {navData.map((el,idx)=>
           <Link to ={`${routePath[el]}`} key={`${el}${idx}`}>
           <li>${el}</li>
           </Link>
           )}
           
            </ul> 
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
    "페이지2" : "/page/1"
}
export default Header;