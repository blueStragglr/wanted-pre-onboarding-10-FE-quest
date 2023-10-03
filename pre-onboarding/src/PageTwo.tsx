import axios from "axios";

const PageTwo = () => {
  // Mock API의 호출 결과를 출력하는 페이지
  const getData = async () => {
    const data = await axios.get(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
    );

    console.log(data.data);
  };

  return (
    <div>
      <button
        type="button"
        onClick={getData}
      >
        API 호출
      </button>
    </div>
  );
};

export default PageTwo;
