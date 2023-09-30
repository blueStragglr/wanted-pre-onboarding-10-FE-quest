// error.tsx
'use client'

interface Props {
  error: Error
  reset: () => void
}

const RootError = (props: Props) => {
  return (
    <div>
      <h1>페이지에 에러가 발생했습니다.</h1>
      <button onClick={ () => props.reset() }>ReTry</button>
    </div>
  )
}

export default RootError