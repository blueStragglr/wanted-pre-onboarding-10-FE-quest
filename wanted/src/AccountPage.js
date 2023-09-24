import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "../src/Input";
import SquareButton from "../src/SquareButton";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const submitEvent = useCallback(async (result) => {
    console.log(result);
  }, []);

  return (
    <>
      <article>
        <section>
          <div>
            <div>로그인 하기</div>
          </div>
          <div>
            <form onSubmit={handleSubmit(submitEvent)}>
              <div>
                <Input
                  formId={"id"}
                  placeholder={"아이디"}
                  register={register}
                ></Input>
                <Input
                  formId={"password"}
                  placeholder={"비밀번호"}
                  register={register}
                  type={"password"}
                ></Input>
              </div>
              <SquareButton
                color={"mint"}
                isDisabled={isValid ? false : true}
                width={null}
                height={null}
                text={"콘솔 출력"}
                buttonType={"submit"}
              />
            </form>
            <SquareButton
              color={"mint"}
              isDisabled={false}
              width={null}
              height={null}
              text={"mock API 호출 결과 페이지 가기"}
              buttonType={null}
              onClickEvent={() => {
                navigate("/mock");
              }}
            />
          </div>
        </section>
      </article>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
        }

        section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20.625rem;
        }

        section > div {
          width: 100%;
        }

        section > div:first-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.3125rem;
        }

        section > div:first-child > div:first-child {
          font-size: 1.5rem;
          font-weight: 500;
        }

        section > div:first-child > div:nth-child(2) {
          font-size: 0.75rem;
          font-weight: 400;
          color: #089885;
          text-decoration: underline;
          cursor: pointer;
        }

        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3.75rem;
          margin-bottom: 1rem;
        }

        form > div {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.6875rem;
        }
      `}</style>
    </>
  );
};

export default AccountPage;
