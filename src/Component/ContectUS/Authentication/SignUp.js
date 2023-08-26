import React, { useRef,useContext ,useState} from 'react';

import { redirect, useNavigate } from 'react-router-dom';


import './LogIn.css';
import Header from '../../../Header';
import { myContex } from '../../ContexApi/Contex';
 
export default function LogIn() {
   
    const navigate = useNavigate(); // Use useNavigate hook
const forgotHandler=()=>{
    navigate("/profile")
}
    
    const {loginHandler,token}=useContext(myContex)
    const usernameinputvalue = useRef()
    
    const  passwordinputrefvalue=useRef()
    const [login, setLogin] = useState(false);
const [loding,setloding]=useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setloding(true);
        
        let url;
        if (login) {
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjdZ9of2N8GRjRQOKmr2jvthfaP7FvghA"
        } else {
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjdZ9of2N8GRjRQOKmr2jvthfaP7FvghA"
        }
        
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: usernameinputvalue.current.value,
                password: passwordinputrefvalue.current.value,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    throw new Error(data.error.message);
                });
            }
        })
        .then((data) => {

          
            if (login) {

                alert("Logged in successfully");
                console.log(data)
                localStorage.setItem("token",token)
                navigate("/store")
            } else {
                alert("Signed up successfully");
              
                console.log(data)
            }
            loginHandler(data.idToken)

            setloding(false)
            // passwordinputrefvalue="",
            // usernameinputvalue=""
        
           
        })
        .catch((error) => {
            alert(error.message);
            setloding(false);
        });
    };
    

const token1=localStorage.getItem("token")
console.log(token1,"token is recied")

    return (
        <div className="logindiv">
            <h2>{login ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit} className="loginform">
                <div>
                    <input
                        type="text"
                        id="username"
                        placeholder="Email..."
                       ref={usernameinputvalue}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password..."
                        ref={passwordinputrefvalue}
                       
                        required
                    />
                </div>
              { !loding && <button type="submit">{login ? 'Log In' : 'Sign Up'}</button> }
              {loding && <p>sending request...</p>}
            </form>
            <p onClick={() => setLogin(!login)}>
                {login ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </p>
           { login &&<p onClick={forgotHandler}  className="forgot">Forgot Password</p>}
  
        </div>
    );
}
