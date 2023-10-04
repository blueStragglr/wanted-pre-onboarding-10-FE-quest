import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  id: string;
}

const Mock = () => {
  const [userData, setUserData] = useState<UserData[]>();

  useEffect(() => {
    axios
      .get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then((data) => setUserData(data.data));
  }, []);

  return (
    <>
      {userData &&
        userData.map((data, index) => {
          return (
            <div key={`useData-${index}`}>
              <span>{data.id}</span>
              <span>{data.name}</span>
            </div>
          );
        })}
    </>
  );
};

export default Mock;
