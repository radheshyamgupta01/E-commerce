import React, { useContext, useEffect ,useState} from 'react'
import { myContex } from "./Component/ContexApi/Contex"
// import{useNavigate} from "react-router-dom"
import "./Header.css"
import { NavLink } from 'react-router-dom'
import Modal from './Component/Modal/Modal'
import LogIn from './Component/ContectUS/Authentication/LogIn'

export default function Header() {
  const [autoLogout, setAutoLogout] = useState(false)
  const localStorageitem=localStorage.getItem("token")
  // const navigate=useNavigate()
 const {token,logoutHandler}=useContext(myContex)
 const logout=()=>{
  logoutHandler()
  localStorage.removeItem("token")
  // navigate("/login")
 
 
 }

//  useEffect(() => {
//   if (localStorageitem) {
//     setAutoLogout(true); 
//     const time = setTimeout(() => {
//       setAutoLogout(false); 
//       localStorage.removeItem("token");
//       navigate("/login");
//     }, 100000);
//     return () => {
//       clearTimeout(time); 
//     };
//   }
// }, []);



  const { display, setDisplay, cartDataItem, setCartItemData, datas } = useContext(myContex)
  useEffect(() => {
    if (datas.length <= 0) {
      setCartItemData(0)
    }

  }, [])


const displayfun = () => {
  setDisplay(true);
  
};
  useEffect(()=>{
    fetch("https://crudcrud.com/api/4cb3612d3eb44fcc85c50e08bd734033/cart")
      .then((res) => res.json())
      .then((data) => {
        let totalCartItems = 0; 

        for (let key in data) {
          const cartNum = data[key].cartItem.cartNum; 
          totalCartItems += cartNum; 
        }

        setCartItemData(totalCartItems); 
      });
  },[cartDataItem])

  const closeHandler = () => {
    setDisplay(false)
  }

  return (
    <>

      <nav>
        <ul className="menue">

         { token && <li ><NavLink to={"/home"} style={{color:"white" ,textDecoration:"none"}} activeClassName="active" >HOME</NavLink></li>}
         {  token &&<li><NavLink to={"/store"} style={{color:"white", textDecoration:"none"}}>STORE</NavLink></li>}
          { token &&<li><NavLink to={"/about"} style={{color:"white" ,textDecoration:"none"}}>ABOUT</NavLink></li>}
          {token && <li><NavLink to={"/contact"} style={{color:"white" ,textDecoration:"none"}}>CONTACT-US</NavLink></li>}
          {  !token &&<li style={{color:"white" ,textDecoration:"none"}}>REACT AUTH</li>}
          {  !token &&<li><NavLink to={"/login"} style={{color:"white" ,textDecoration:"none"}}>LOG IN</NavLink></li>}
         
         { token &&<li><NavLink to={"/profile"} style={{color:"white" ,textDecoration:"none"}} >PROFILE</NavLink></li>}
         

          { token && <li><NavLink to={"/logout"} style={{color:"white" ,textDecoration:"none"}} onClick={logout} >LOGOUT</NavLink></li>}

        </ul>
        {token && (
  <div>
    <button onClick={displayfun} className="car_right_button">
      cart
    </button>
    {cartDataItem >= 0 && <span className="badge">{cartDataItem}</span>}
  </div>
)}




      </nav>
      {display ? <Modal closehandlerbutton={closeHandler} /> : ""}
      
    </>

  )
}
