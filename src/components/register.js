import React, { useState } from 'react'
import { Button, TextField, Alert, AlertTitle } from '@mui/material'
import { Link } from "react-router-dom";


export default function Register() {

  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [confirmPassWord, setConfirmPassWord] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)



  function handleSignUp(e) {
    e.preventDefault();
    if (first.length === 0 || last.length === 0 || email.length === 0 || userName.length === 0 || passWord.length === 0 ||
      confirmPassWord.length === 0 || (passWord !== confirmPassWord)) {
      setIsClicked(true)

      return

    }

    let users = [];
    if (localStorage.getItem("userAccount") !== null)
      users = JSON.parse(localStorage.getItem("userAccount"))
    users.push({ first: first, last: last, email: email, userName: userName, password: passWord })
    localStorage.setItem("userAccount", JSON.stringify(users))
    setIsSuccess(true)

  }
  function SuccessMessage() {
    return (
      <Alert>
        <AlertTitle>Success!</AlertTitle>
        you successful sign up
      </Alert>
    )
  }
  return (
    <form className='register' onSubmit={handleSignUp}>

      {isSuccess && <SuccessMessage />}

      <h2>Register</h2>

      <TextField error={isClicked && first.length === 0} label="First name"
        helperText={(isClicked && first.length === 0) ? "Required" : ""}
        variant='filled' placeholder='firstName' value={first} name="first"
        onChange={(e) => setFirst(e.target.value)} ></TextField>

      <TextField error={isClicked && last.length === 0} label="Last name"
        helperText={(isClicked && last.length === 0) ? "Required" : ""}
        variant='filled' placeholder='lastName' value={last} name="last"
        onChange={(e) => setLast(e.target.value)} ></TextField>


      <TextField error={isClicked && email.length === 0} label="Email"
        helperText={(isClicked && email.length === 0) ? "Required" : ""}
        variant='filled' placeholder='email' value={email} name="username"
        onChange={(e) => setEmail(e.target.value)} ></TextField>


      <TextField error={isClicked && userName.length === 0} label="User name"
        helperText={(isClicked && userName.length === 0) ? "Required" : ""}
        variant='filled' placeholder='username' value={userName} name="username"
        onChange={(e) => setUserName(e.target.value)}></TextField>


      <TextField error={isClicked && passWord.length === 0} label="Password"
        helperText={(isClicked && passWord.length === 0) ? "Required" : ""}
        variant='filled' placeholder='password' value={passWord} name="password"
        type="password" onChange={(e) => setPassWord(e.target.value)}></TextField>


      <TextField error={isClicked && (confirmPassWord.length === 0 || passWord !== confirmPassWord)} label="Confirm password"
        helperText={(isClicked && confirmPassWord.length === 0) ? "Required" : (confirmPassWord !== passWord) ? "Password must match!" : ""}
        variant='filled' placeholder='confirm password' value={confirmPassWord}
        type="password" name="confirmPassWord"
        onChange={(e) => setConfirmPassWord(e.target.value)} ></TextField>


      <Button variant="contained" type="submit" className="button">SignUp</Button>


      <p>Already have an account?
        <Link to='/'>
          logIn
        </Link>
      </p>



    </form>
  )
}
