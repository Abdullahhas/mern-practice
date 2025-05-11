import React from 'react'

const Login = ({form , setForm , handleLogin}) => {
  return (
    <form onSubmit={handleLogin}> 
    <h3>login</h3>
     
     <div>
        <input type="text"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder='email'
        />
    </div> 

     <div>
        <input type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder='password'
        />
    </div> 

    <button type="submit">submit</button>
    </form>
  )
}

export default Login
