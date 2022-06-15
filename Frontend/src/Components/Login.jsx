import React from 'react'
import { useRef, useState } from 'react'
import {  useAuth, login, provider, fireAuth } from '../firebase/firebase'
import { useNavigate } from "react-router-dom"
import "./auth.css"


const Login = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const currentUser=useAuth()
    const emailRef=useRef()
    const passwordRef=useRef()

    const GoogleAuth = async(e) => {
        e.preventDefault();
        try {
            await fireAuth.signInWithPopup(provider);
            await navigate("/home")
        } catch (error) {
            alert(error.message)
        }
    };

    const handleLogin=async()=>{
        try {
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            alert("Login Successful")
            navigate("/home")
        } catch (error) {
            alert(error.message);
        }
        setLoading(false)
    }

  return (
    <div className='box mt-5 pt-5 container-fluid'>
        <div className="row pt-5">
            <div className="col">
                <img src="https://www.linkpicture.com/q/Web-capture_15-6-2022_85521_modesens.com.jpeg" alt="" className='img'/>
            </div>
            <div className="col">
                <p className='lead'>Log in to your account</p>
                <p className='text-black'>Compare across 500+ stores<br/>
                    to find the best price.</p>
                <input className='mb-2 pl-5 pr-5 text-center' type="email"  ref={emailRef} placeholder='Email' />
                <br />
                <input className='mb-2 pl-5 pr-5 text-center' type="password" ref={passwordRef}placeholder='password'/>
                <br />
                <p className='text-black-50 pointer'><small>Forgot Password ?</small></p>
                <button className='btn btn-primary pl-5 pr-5 button' disabled={loading || currentUser !==null} onClick={handleLogin}>Log In</button>
                <p className='text-black-50 pt-4 pb-3'>or</p>
                <div className="container-fluid logos">
                    <div className="row">
                        <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617google.svg" alt="google" onClick={GoogleAuth} /></div>
                        <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617facebook.svg" alt="facebook" onClick={GoogleAuth}/></div>
                        <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617apple.svg" alt="apple-store" onClick={GoogleAuth}/></div>                    </div>
                </div>
                <p className='text-black-50 pt-3 pointer' onClick={()=>navigate("/")} ><u>Don't have an account? Please sign up.</u></p>
            </div>
        </div>
    </div>
  )
}
// https://modesens-auth.firebaseapp.com/__/auth/handler

export default Login