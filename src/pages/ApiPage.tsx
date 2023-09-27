import { useState } from "react";
import axios from "axios";
import Container from "../components/Container";

const ApiPage = (): JSX.Element => {
  const [apiData, setApiData] = useState<{ name: string; id: string }[] | []>(
    []
  );

  const getApi = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
      });

      setApiData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <p className="text-4xl font-bold">API 호출하기</p>
        <button
          className="py-1 px-3 mt-3 rounded-full bg-[#65D26E] text-black font-semibold"
          onClick={getApi}
        >
          Click!
        </button>
        {apiData.length > 0 ? (
          <ul className="h-[600px] mt-9 overflow-auto">
            {apiData.map((list, index) => (
              <li key={list.id}>{`${index + 1}. ${list.name}`}</li>
            ))}
          </ul>
        ) : (
          <>
            <p className="mt-48 text-center opacity-50">데이터가 없습니다.</p>
          </>
        )}
      </Container>
    </>
  );
};

export default ApiPage;
