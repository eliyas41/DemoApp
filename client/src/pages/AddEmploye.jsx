import React, { useState } from 'react'
import { json } from 'react-router'

const AddEmploye = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    //prepare data to send to the server
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      password: password
    }

    //now send data to the server
    const apiUrl = "http://localhost:4000/add-employee"
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    const response = fetch(apiUrl, requestOptions)
    response.then(res => res.json())
      .then(res => {
        console.log(res.status)
        setMessage(res.message)
        if (res.status === "Success") {
          window.location.href = "/"
        }
      })
  }


  return (
    <div>
      <small style={{ color: "red" }}>{message}</small>

      <h1>Add employee</h1>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="fname">First Name: </label> <br />
        <input type="text" id='fname' name='fname' value={firstName} onChange={e => setFirstName(e.target.value)} /> <br />
        <label htmlFor="lname">Last Name: </label> <br />
        <input type="text" id='lname' name='lname' value={lastName} onChange={e => setLastName(e.target.value)} /> <br />
        <label htmlFor="email">Email: </label> <br />
        <input type="email" id='email' name='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} /> <br />
        <label htmlFor="password">Password: </label> <br />
        <input type="password" id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <input type="submit" id='btn' value="Submit" />
      </form>
    </div>
  )
}

export default AddEmploye