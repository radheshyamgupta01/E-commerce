
import React, { useContext, useEffect, useState } from 'react';
import "./ModalContent.css";
import { myContex } from '../ContexApi/Contex';
import axios from 'axios';

export default function ModalContent(props) {
  const { datas, setData, setCartItemData, cartDataItem } = useContext(myContex);
  const [newstate, setnewState] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const userEmail = localStorage.getItem("userEmail"); 

  const closeHandler = () => {
    props.closebutton1();
  };

  const removebuttonHandler = (itemToRemove,userEmailA) => {
    
    
    axios.delete(`https://crudcrud.com/api/4cb3612d3eb44fcc85c50e08bd734033/cart/${itemToRemove}`)
      .then(() => {
        setnewState(prevData => prevData.filter(item => item.ID !== itemToRemove));
        alert("deleted")
        if(userEmailA==userEmail){
          setCartItemData((prevData)=>prevData-1)
        }
        else{
          setCartItemData("")
        }
       
     
          })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://crudcrud.com/api/4cb3612d3eb44fcc85c50e08bd734033/cart`);
        const newDataArray = [];
        for (let key in response.data) {
          if(response.data[key].cartItem.emailid==userEmail){
            const newDATA = {
              ID: response.data[key]._id,
              TITLE: response.data[key].cartItem.title,
              EMAIL: response.data[key].cartItem.emailid,
              PRICE: response.data[key].cartItem.price,
              IMAGEURL: response.data[key].cartItem.imageUrl,
              
            };
            newDataArray.push(newDATA);
          }
         
         
          
        }
        setnewState(newDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userEmail]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < datas.length; i++) {
      const pricedata = datas[i].price.replace("₹", "");
      sum += parseFloat(pricedata);
    }
    setTotalPrice(sum);
  }, [datas]);

  const purchasebutton = () => {
    if (datas.length <= 0) {
      alert("Your cart is empty");
    } else {
      alert("Thank you for purchasing this product");
    }
  };

  return (
    <div className="modal_content_parent">
      <div className="cartbuton">
        <div>CART</div>
        <div>
          <button className="cancle" onClick={closeHandler}>x</button>
        </div>
      </div>
      {/* <h4>Current User: {userEmail}</h4> */}
      <div className="itemlist">
        <h2>ITEM</h2>
        <h2>PRICE</h2>
        <h2>QUANTITY</h2>
      </div>
      <div className="mapImageData">
        <ul>
          {newstate.map((item, index) => (
            <li key={index}>
              <img src={item.IMAGEURL} alt={item.TITLE} style={{ position: "relative", left: "5px" }} />
              <span className="remove" style={{ margin: "0px 5px", position: "relative", left: "5px" }}>{item.TITLE}</span>
              <span className="remove" style={{ position: "relative", left: "25px" }}>{item.PRICE}</span>
              <input style={{ position: "relative", left: "50px" }} />
              <h5
                className="remove button"
                style={{
                  display: "inline-block",
                  background: "rgb(226, 21, 21)",
                  outline: "none",
                  width: "80px",
                  padding: "5px",
                  border: "none",
                  cursor: "pointer",
                  margin: "0px 20px",
                  position: "relative",
                  left: "70px",
                  color: "white"
                }}
                onClick={() => removebuttonHandler(item.ID,item.EMAIL)}
              >
                REMOVE
              </h5>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <div className="total">
        <h3>Total</h3> <span style={{ fontWeight: "500" }}>₹ {totalPrice}</span>
      </div>
      <div className="purchase">
        <button className="button1" onClick={purchasebutton}>PURCHASE</button>
      </div>
    </div>
  );
}
