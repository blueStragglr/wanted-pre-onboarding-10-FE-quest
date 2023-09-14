import React, { useState } from 'react';
import axioswrapper from './axios';

function ApiPage() {
    const [myApiResult, setMyApiResult] = useState('');

    const apiCall = () => {
        axioswrapper('GET', 'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
        .then((response) => {
            console.log('call success', response);
            setMyApiResult(JSON.stringify(response));
        })
        .catch((error) => {
            console.log('call fail', error);
        });
    };

    return (
        <div>
            <button onClick={apiCall}>api 호출하기</button>
            <br/>
            Result :
            <br/>
            {myApiResult}
        </div>
    )
}

export default ApiPage
