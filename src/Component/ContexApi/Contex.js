import React, { createContext, useState } from 'react'

const myContex = createContext()


export default function Contex({ children }) {
   const intialState=localStorage.getItem("token")
   const [token,settoken]=useState(intialState)
  
   const userLoggedIn=!!token;
   const loginHandler=(token)=>{
settoken(token)
   }
   const logoutHandler=()=>{
      settoken(null)
   }
   // const contexValue={
   //    token:token,
   //    isLoggedin:userLoggedIn,
   //    login:loginHandler,
   //    logout:logoutHandler

   // }
   const [display, setDisplay] = useState(false)

   const [datas, setData] = useState([])
   const [cartDataItem, setCartItemData] = useState(0)
   const cartDataItemHandler = (dataitem) => {
      setCartItemData((prvData) => prvData + dataitem)
   }
   const dataHandler = (itemdata) => {

      setData(itemdata)
   }

   return (

      <myContex.Provider value={{ datas, dataHandler, setCartItemData,cartDataItem, cartDataItemHandler, setData ,setDisplay,display,token,loginHandler,logoutHandler }} >
         {children}

      </myContex.Provider>
   )
}
export { myContex }
