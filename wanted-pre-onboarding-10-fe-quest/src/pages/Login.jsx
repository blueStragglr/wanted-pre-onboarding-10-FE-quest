import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="w-full max-w-sm m-auto">
        <header className="pt-20 mb-10">
          <h1 className="text-center text-blue-200 pb-10">
            로그인 시연 페이지 입니다 ✅
          </h1>
          <h2
            className="
          text-center text-3xl font-bold text-blue-400"
          >
            로그인
          </h2>
        </header>
        <main className="pb-10">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-2"
          >
            <div className="relative">
              <input
                {...register("id", {
                  required: "아이디를 입력해주세요.",
                })}
                placeholder="아이디"
                className="w-full h-12 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-400"
              />
              {errors.id && (
                <span
                  className="text-red-500 text-sm ml-2
                "
                >
                  {errors.id.message}
                </span>
              )}
            </div>

            <div className="relative">
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
                placeholder="비밀번호"
                type="password"
                className="w-full h-12 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-400"
              />
              {errors.password && (
                <span className="text-red-500 text-sm ml-2">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="py-4">
              <button className="h-12 w-full border rounded-md shadow-sm bg-blue-400 font-bold text-white ">
                로그인
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
