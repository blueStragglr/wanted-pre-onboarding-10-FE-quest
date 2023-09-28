import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const pathName = useLocation();
  console.log(pathName);
  return (
    <nav>
      <ul>
        <li><Link to={`/auth/signin`}>Page1</Link></li>
        <li><Link to={`/result`}>Page2</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation