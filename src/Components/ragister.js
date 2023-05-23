import React from 'react'
import "./login.css"

const Ragister = () => {
  return (
    <div>
          <div>
        <main>
            <form method="post">
                <h1>Register now</h1>
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">SignUp</button>
            </form>
        </main>
    </div>
    </div>
  )
}

export default Ragister