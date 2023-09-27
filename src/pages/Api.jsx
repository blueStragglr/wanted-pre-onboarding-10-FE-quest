import { useEffect, useState } from "react";

function Api() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
    );
    const data = await response.json();
    // console.log(data);
    setDataList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main id="api">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {dataList.map((item) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Api;
