import React from 'react'

const AddEmploye = () => {
  return (
    <div>
      <h1>Add employee</h1>

      <form action="">
        <label htmlFor="fname">First Name: </label> <br />
        <input type="text" id='fname' name='fname' /> <br />
        <label htmlFor="lname">Last Name: </label> <br />
        <input type="text" id='lname' name='lname' /> <br />
        <label htmlFor="email">Email: </label> <br />
        <input type="email" id='email' name='email' /> <br />
        <label htmlFor="password">Password: </label> <br />
        <input type="password" id='password' name='password' /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddEmploye