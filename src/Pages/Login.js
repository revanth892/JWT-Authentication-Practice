import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import setAuthenticationHeader from '../utils/setAuthenticationHeader';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
function Login(props) {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async() =>{
        axios.post('http://localhost:8080/loginuser',{
          username:username,
          password:password
        }).then(response=>{
          const {success,token}=response.data;
          if(success===true)
          {
              localStorage.setItem('jsonwebtoken',token)
              // console.log("token set")
              setAuthenticationHeader(token)
              navigate('/accounts')
              props.onLoggedIn()
          }
          else{
            console.log("error")   
          }
        }).catch(error=>{
          console.log(error)
        })
    }

    // const handleLogin = async() => {
    //     fetch('http://localhost:8080/loginuser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({"username":username,"password":password})
    //     }).then(response => response.json())
    //         .then(result => {
    //             // console.log(result)
    //             // console.log(result.success)
    //             if(result.success === true)
    //                 {
    //                     const token = result.token
    //                     localStorage.setItem('jsonwebtoken',token)
    //                     console.log(2);
    //                 }
    //         })

    // }
    return (
        <>
            <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          name='username'
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
        </>
    )
}

const mapDispatchToProps =(dispatch)=>{
  return{
    onLoggedIn: () => dispatch({type: 'ON_LOGGED_IN'})
  }
}

export default connect(null, mapDispatchToProps)(Login)