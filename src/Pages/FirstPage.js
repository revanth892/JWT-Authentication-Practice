import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import setAuthenticationHeader from '../utils/setAuthenticationHeader'
export default function FirstPage() {

    // const getaccountdata=async()=>{
    // const token=localStorage.getItem("jsonwebtoken")

    //     fetch(`http://localhost:8080/accounts`,{
    //         method: 'GET',
    //         headers:{
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(response=>response.json())
    //     .then(accounts=>{
    //         console.log(accounts)
    //     })
    // }

    const [accounts,setAccounts]=useState([])
    useEffect(()=>{
        // const token=localStorage.getItem('jsonwebtoken')
        // setAuthenticationHeader(token)
        getaccountdata()
    },[])
    const getaccountdata=()=>
        {
            axios.get('http://localhost:8080/accounts')
            .then(response=>{
                console.log(response.data)
                setAccounts(response.data)
            })
            .catch(error=>console.log(error))
        }

    return (
        <>
            {/* <button onClick={getaccountdata}>getdetails</button> */}
            {/* <h1>{accounts}</h1> */}
        </>
    )
}
