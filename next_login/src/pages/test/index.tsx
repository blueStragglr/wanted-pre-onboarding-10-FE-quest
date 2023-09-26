import { useEffect, useState } from "react";

const TestPage = () => {
  const [result, setResult] = useState<any>();
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>결과값</div>
      <div>{result && JSON.stringify(result)}</div>
    </>
  );
};

export default TestPage;
