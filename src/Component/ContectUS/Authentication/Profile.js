import React, { useRef, useContext } from 'react'
// import { useNavigate}from "react-router-dom"
import "./Profile.css"
import { myContex } from '../../ContexApi/Contex'
export default function Profile() {
  //  const navigate=useNavigate()
  const { token } = useContext(myContex)
  const tokenValue=localStorage.getItem("token")
  const passwordrefValue = useRef()
  const passwordHandler = () => {
    const newpasswordValue = passwordrefValue.current.value;
    
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAjdZ9of2N8GRjRQOKmr2jvthfaP7FvghA", {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        password: newpasswordValue,
        returnSecureToken:true,
      })
    }).then((res) => {
      if (res.ok) {
        alert("succefully change the password")
        // navigate("/login")
      }
      else {
        res.json().then((body) => {
          alert(body.error.message)
        })
      }
    })

  }

  return (
    <div className="profilepage">
      <label>Reset Password</label>
      <input type='number' ref={passwordrefValue} minLength="3" placeholder="New Password..." required></input>
      <button onClick={passwordHandler}>Reset</button>
    </div>
  )
}
