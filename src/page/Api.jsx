import { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [api, setApi] = useState();
  useEffect(() => {
    get();
  }, []);

  const get = () => {
    axios
      .get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then((res) => {
        console.log(res);
        setApi(res.data);
      })
      .catch((error) => {
        return "에러";
      });
  };
  return (
    <>
      {api?.map((item, i) => {
        return (
          <div key={i}>
            <p>{"No. " + item.id}</p>
            <p>{"Name: " + item.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Api;
