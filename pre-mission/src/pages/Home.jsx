import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../components/home-styled';

const Home = () => {
    return(
        <>
            <div>
                <ul>
                    <Title>원티드 프리온보딩 10월 사전 과제</Title>                    
                    <li><Link to='/login'>LogIn</Link></li>
                    <li><Link to='/showAPI'>ShowAPI</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Home;