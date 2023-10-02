import { APIInstance } from "../../api/instance";
import { useEffect, useState } from "react";

function Main() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await APIInstance.get("authmock");
        const array = response.data;
        setResponseData(array);
      } catch (error) {
        console.error("Error 발생: ", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {responseData.map((item, id) => (
        <div key={id}>
          <span>{item.id}</span>:<span>{item.name}</span>
        </div>
      ))}
    </>
  );
}

export default Main;
