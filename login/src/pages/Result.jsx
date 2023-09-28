import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Result() {
 const [data, setData] = useState([]);

 useEffect(() => {
    axios.get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock").then(response => setData(response.data));
 }, [])
 

  return (
    <div>
        {data.map((el, index) => {
            return <div key={index}>{el.id}. {el.name}</div>;
        })}
    </div>
  );
}
