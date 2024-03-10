import React, { useState } from 'react'

const AddEmploye = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      password: password
    }
  }

  return (
    <div>
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