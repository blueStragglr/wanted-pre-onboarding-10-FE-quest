import { FormEvent, useRef } from 'react'

export default function Login() {
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(
      `id:${idInputRef.current?.value} pw:${pwInputRef.current?.value}`
    )
  }

  const idInputRef = useRef<HTMLInputElement>(null)
  const pwInputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <form className="bg-white p-8 rounded shadow-lg w-80 flex flex-col">
        <input
          placeholder="아이디를 입력하시오"
          className="bg-slate-50 border border-solid border-slate-300 radius-4 px-4 py-2 w-full mb-4"
          ref={idInputRef}
        />
        <input
          placeholder="비밀번호를 입력하시오"
          type="password"
          className="bg-slate-50 border border-solid border-slate-300 radius-4 px-4 py-2 w-full"
          ref={pwInputRef}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          onClick={handleSubmit}
          className="mt-6 hover:cursor-pointer hover:text-blue-500"
        >
          로그인
        </button>
      </form>
    </>
  )
}
