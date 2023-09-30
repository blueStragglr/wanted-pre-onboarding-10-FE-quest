import { useGetMessages } from "@/lib/swr/getMessages"

export default function MessageContainer() {
  const { data: messages, error } = useGetMessages();

  return <>
    <section className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-1 p-2 border-[1px] rounded-lg bg-white border-TPrimary">
        <span className="text-TPrimary">test user</span>
        <span className="text-gray-500">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
      </div>
      <div className="flex flex-col gap-1 p-2 border-[1px] rounded-lg bg-white border-TPrimary">
        <span className="text-TPrimary">한글 테스트</span>
        <span className="text-gray-500">연소자의 근로는 특별한 보호를 받는다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.
</span>
      </div> 
      {messages?.map(msg => {
        return <div className="flex flex-col gap-1 p-2 border-[1px] rounded-lg bg-white border-TPrimary" key={msg.id}>
          <span className="text-TPrimary">{msg.name}</span>
          <span className="text-gray-500">{msg.content}</span>
        </div>
      })}
      {error ? <span className="text-TPrimary">something wrong</span> : null}
    </section>
  </>
}