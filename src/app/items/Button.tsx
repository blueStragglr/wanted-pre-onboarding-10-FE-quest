interface Props {
  children: React.ReactNode
}

export default function Button({ children }: Props){
  return <>
    <button className="p-2 px-7 rounded-md bg-TPrimary text-white">{children}</button>
  </>
}