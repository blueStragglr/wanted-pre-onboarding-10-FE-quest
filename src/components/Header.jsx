import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './ui/Navigation'

const Header = () => {
  return (
    <header id="Header">
      <Link className="logo" to={'/'}>
        <h1>Home</h1>
      </Link>
      <Navigation />
    </header>
  )
}

export default Header