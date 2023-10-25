import React, { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authEmail, setAuthEmail] = useState(auth?.currentUser?.email)
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setAuthEmail(auth.currentUser.email)
      navigate('/tracking');

    } catch (e) {
      console.log(e)
    }
  }
  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      setAuthEmail(auth.currentUser.email)
      navigate('/tracking');

    } catch (e) {
      console.log(e)
    }
  }
  const signOutFunction = async () => {
    try {
      await signOut(auth)
      setAuthEmail(auth?.currentUser?.email)

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='loginContainer'>
      <div>Welcome to Calorie Counter System</div>
      <input className='block' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' className='block' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
      <div className='center'>
        <button className='block center' onClick={signUp}>
          Register
        </button>
      </div>
      <div className='center'>
        <button className='block center' onClick={signUpWithGoogle}>
          Register with google
        </button>
      </div>
      {authEmail != undefined && <div className='center'>
        <button className='block center' onClick={signOutFunction}>
          Logout
        </button>
      </div>}

    </div>
  )
}
