import React, {useState,useEffect}  from 'react'
import axios from "axios";

const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
        .then(response => {
            setData(response.data)
        });
    }, []);


  return (
    <div>
    {data.map((item, index) => {
        return <div key={index}>{item.id} : {item.name}</div>;
    })}
    </div>
  )
}

export default Data