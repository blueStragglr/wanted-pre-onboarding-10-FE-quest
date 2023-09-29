import { useRef, useState, useEffect} from "react"

interface Structure {
  name: string;
  id: string;
}

export default function App() {
  const [datas, setDatas] = useState<Structure[]>();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
    .then(response => response.json())
    .then(json => setDatas(json))
  }, []);


  const handleId = () => {
    console.log(idRef.current?.value);
  }

  const handlePw = () => {
    console.log(pwRef.current?.value);
  }

  return (
    <main className="w-screen pt-32 pb-10 flex flex-col gap-y-10 justify-center items-center">
      <section className="w-72 h-28 bg-neutral-200 flex justify-center items-center rounded-md shadow-md">
        <div className="flex flex-col gap-y-5" >
          <div className="flex gap-x-2 items-center">
            <label className="mr-2" htmlFor="id">ID</label>
            <input type="text" id="id" ref={idRef} placeholder="아이디를 입력해주세요." className="text-sm w-44 p-2"/>
            <button className="bg-neutral-400 px-2 py-1 rounded-md" onClick={handleId}>콘솔</button>
          </div>
          <div className="flex gap-x-2 items-center">
          <label htmlFor="pw">PW</label>
          <input id="pw" type="password" ref={pwRef} placeholder="비밀번호를 입력해주세요." className="text-sm w-44 p-2"/>
          <button className="bg-neutral-400 px-2 py-1 rounded-md" onClick={handlePw}>콘솔</button>
          </div>
        </div>
      </section>

      <div className="w-[520px] h-full grid grid-cols-3 gap-3 max-sm:w-[440px]">
        {
          datas && datas?.map(data => <div className="h-8 bg-neutral-100 border shadow flex items-center rounded-md pl-2 text-xs">{data.id} {data.name}</div>)
        }
      </div>
    </main>
  )
}
