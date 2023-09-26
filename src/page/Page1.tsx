import { useState } from "react";
import styled from "styled-components";

interface Login {
  id: string;
  password: string;
}

const Page1 = () => {
  const [loginData, setLoginData] = useState<Login>({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`id: ${loginData.id}`);
    console.log(`password: ${loginData.password}`);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <div className="form-item">
          <span>아이디</span>
          <input
            placeholder="id"
            onChange={handleChange}
            name="id"
            value={loginData.id}
          />
        </div>
        <div className="form-item">
          <span>비밀번호</span>
          <input
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={loginData.password}
          />
        </div>
        <button type="submit">버튼</button>
      </Form>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 30px;
  color: #0d3b66;
  box-shadow: 2px 4px 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .form-item {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 350px;

    span {
      font-weight: 600;
      font-size: 1rem;
    }

    input {
      background-color: white;
      padding: 10px 25px;
      font-size: 1.1rem;
      border: solid 3px;
      border-color: #0d3b66;
      border-radius: 25px;

      &::placeholder {
        color: gray;
      }

      &:focus {
        outline: none;
      }
    }
  }

  button {
    background-color: #0d3b66;
    color: white;
    padding: 10px 0px;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default Page1;
