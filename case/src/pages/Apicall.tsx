import React from 'react';
import { useState, useEffect } from 'react';

const Apicall = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://650a755adfd73d1fab086448.mockapi.io/api/member/insert', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const jsonData = await response.json();

                setData(Array.isArray(jsonData) ? jsonData.slice(0, 3) : [jsonData]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p>이름: {item.name}</p>
                    <p>사진</p>
                    <img src={item.avatar} alt={`사진 of ${item.name}`} />
                </div>
            ))}
        </div>
    );
};

export default Apicall;
