


const Register = ({form , setForm , handleSubmit}) => {
  return (
    
    <form onSubmit={handleSubmit}> 
    <h3>signup</h3>
     <div>
        <input type="text"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        placeholder='username'
        />
    </div> 

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

export default Register
