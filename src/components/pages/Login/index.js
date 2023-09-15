import React from 'react'

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <input type="text" placeholder='ID' />
                <input type="password" placeholder='PASSWORD' />
                <button>Login</button>
            </form>
        </main>
    )
}

export default Login