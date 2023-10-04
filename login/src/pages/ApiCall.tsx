import { useEffect, useState } from "react";
import { useRouter } from "../hooks/useRouter";

interface Data {
  name: string;
  id: string;
}

const ApiCall = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data[] | undefined>();
  const getData = async () => {
    const response = await fetch(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
    );
    if (response.status === 200) {
      const content: Data[] = await response.json();
      setData(content);
      console.log(data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <button
        className="p-2 text-lg border-black rounded-md border-[1px] bg-slate-50"
        onClick={() => push("/")}
      >
        back to Login
      </button>
      <div>
        {isLoading ? (
          <div>before loading data</div>
        ) : data ? (
          data.map((data) => (
            <div key={data.id} className="flex gap-4 p-2">
              <div>{data.name}</div>
              <div>{data.id}</div>
            </div>
          ))
        ) : (
          <div>no data inside</div>
        )}
      </div>
    </div>
  );
};
export default ApiCall;
