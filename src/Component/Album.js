import React, { useContext } from 'react';
import "./Album.css";
import { myContex } from './ContexApi/Contex';
import axios from 'axios';


export default function Album(props) {
  const { datas, dataHandler, cartDataItemHandler, setDisplay,setCartItemData,cartDataItem } = useContext(myContex)
  const seethecart = () => {
    setDisplay(true)
  }

  const addToCartHandler = (item) => {
    const isItemInCart = datas.some((data) => data.title === item.title);

    if (isItemInCart) {
      alert("You have already added this product to the cart.");
    } else {
      // Update local state
      dataHandler([...datas, item]);
      cartDataItemHandler(1);
     
      let useremailId = localStorage.getItem("userEmail")

   const modifiedemail = useremailId.replace(/[@,.]/g, "");
   console.log(modifiedemail,item.id)

       console.log(modifiedemail)
      const cartItem = {
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
        emailid: useremailId,
        cartNum:1
      };

   
      axios.post("https://crudcrud.com/api/4cb3612d3eb44fcc85c50e08bd734033/cart", {cartItem})
        .then((response) => {
          alert("Successfully added to crud database.");
          // setCartItemData(cartDataItem+1)
          // setCartItemData(cartDataItem + 1);
          // localStorage.setItem("cartDataItem", cartDataItem + 1);
      
        })
        .catch((error) => {
          alert("Something went wrong while adding to crud database.");
          
        });
    }
  };





  return (
    <div className='album-img'>
      <ul>
        {props.item.map((img, index) => (

          <li key={index}>
            <h2 style={{ position: "relative", top: "0", left: "95px", fontFamily: "cursiv" }}> {img.title}</h2>
            <div className="hover"> <img src={img.imageUrl} alt={img.title} /> </div>
            <h4>  {img.price}</h4>
            <button style={{ position: "relative", top: "-15px", left: "200px", width: "100px" }} onClick={() => addToCartHandler(img)} >ADD TO CART </button>
          </li>
        ))}

      </ul>
      <button className='lastbutton' onClick={seethecart}>See the cart</button>
    </div>
  );
}
