import React, { useState } from 'react'

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState("")
  // console.log(emailAddress)
  // console.log(password)

  const handleSubmit = async (e) => {
    e.preventDefault()
    //collect data to send to database 
    const data = {
      email: emailAddress,
      password: password
    }

    const apiUrl = "http://localhost:4000/login"
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
    const response = fetch(apiUrl, requestOptions)
    response.then(res => res.json())
      .then(res => {
        console.log(res.message)
        setMsg(res.message)
        if (res.status === "success") {
          window.location.href = "/"
        }
      })
      .catch((error) => {
        setMsg(`Error: ${error}`)
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <small style={{ color: "green" }}>{msg}</small><br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label> <br />
        <input type="email" name='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} /> <br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} /><br />
        <input type="submit" id='btn' value="Submit" />
      </form>
    </div>
  )
}

export default Login