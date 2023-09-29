import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/login">로그인 페이지</Link>
      <Link to="/mock">Mock API 페이지</Link>
    </div>
  )
}

export default Home