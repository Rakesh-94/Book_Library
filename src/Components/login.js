import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div>
          <div>
        <main>
            <form method="post">
                <h1>Login now</h1>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </main>
    </div>
    </div>
  )
}

export default Login
