import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const path = useNavigate();
  useEffect(() => {path("/auth/signin");}, []);

  return (
    <section className="page-main">
    </section>
  )
}

export default HomePage