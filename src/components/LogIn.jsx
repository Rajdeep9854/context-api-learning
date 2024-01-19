import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const LogIn = () => {

  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const {setUser} = useContext(UserContext)

  function handleClick(e){
    e.preventDefault();
    setUser({userName,password})
  }
    return (
    <div>
      <h1>Please LogIn</h1>
      <input 
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      type="text" 
      placeholder='username'
      />
      <input
      onChange={(e)=>setpassword(e.target.value)}
      value={password}
      type="text" 
      placeholder='password'
      />
      <button onClick={handleClick}>Login</button>
      
    </div>
  )
}

export default LogIn