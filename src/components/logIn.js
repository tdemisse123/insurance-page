
import { Button, TextField } from '@mui/material'
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../App';


export default function LogIn() {

  const navigate = useNavigate();

  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [isClicked, setIsClicked] = useState(false)


  const localMyUsers = localStorage.getItem("userAccount")
  const usersObj = JSON.parse(localMyUsers)
  const { setIsAuth, isAuth, setUserInfo } = useContext(AuthContext)

  function handleLogIn(e) {

    e.preventDefault();
    if (userName.length === 0 || passWord.length === 0) {
      setIsClicked(true)

      return
    }
    const res = usersObj.filter(val => val.userName === userName && val.password === passWord)
    setUserInfo(res[0])
    if (res.length > 0) {
      setIsAuth(true)
      navigate('/Home')
    }
  }

  function handleSign() {
    navigate('/register')
  }

  // useEffect(() => {
  //   if (isAuth) navigate('/Home')
  // }, [isAuth])


  return (

    <form className='login' onSubmit={handleLogIn}>

      <h2>Login</h2>
      <TextField error={isClicked && userName.length === 0} label="User name"
        helperText={(isClicked && userName.length === 0) ? "Required" : ""}
        variant='filled' placeholder='username' value={userName} name="username"
        onChange={(e) => setUserName(e.target.value)}></TextField>


      <TextField error={isClicked && passWord.length === 0} label="Pass word"
        helperText={(isClicked && passWord.length === 0) ? "Required" : ""}
        variant='filled' placeholder='password' value={passWord} name="password"
        type="password" onChange={(e) => setPassWord(e.target.value)}></TextField>

      <Button variant="contained" className="button" type="submit">logIn</Button>

      <Button onClick={handleSign} className="button">SignUp</Button>
    </form>
  )
}
