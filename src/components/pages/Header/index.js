import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/api'>API</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header