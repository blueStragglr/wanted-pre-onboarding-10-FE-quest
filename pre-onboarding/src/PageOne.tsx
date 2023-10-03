const PageOne = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("id : " + formData.get("id"));
    console.log("password : " + formData.get("password"));
  };
  return (
    <div>
      {/* 아이디, 패스워드를 입력할 수 있는 폼
    클릭해서 아이디, 비밀번호를 콘솔에 출력할 수 있는 버튼 */}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">아이디 : </label>
          <input
            type="text"
            id="id"
            name="id"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 : </label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default PageOne;
