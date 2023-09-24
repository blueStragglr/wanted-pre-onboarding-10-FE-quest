import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

const API = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const res = await axios.get(url);
      console.log(res);
      if (res.status === 200) {
        setUser(res.data);
      }
    };
    getAPI();
    console.log(user);
  }, []);

  return <>{Array.isArray(user) && user.length !== 0 ? user.map((element) => <div key={element.id}>{element.name}</div>) : <>loading...</>}</>;
};

export default API;
