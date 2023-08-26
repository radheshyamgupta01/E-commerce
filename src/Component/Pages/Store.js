import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Text from '../../Text'
import Album from '../Album'
export default function Store() {
    
  const cartElements = [

    {
    id:"1",
    title: 'Album 1',
    
    price: " ₹12.99",
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 3,
    
    },
    
    {
      id:"2",
    
    title: 'Album 2',
    
    price: " ₹14.99",
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 1,
    
    }
    ,
    {
      id:"3",
      title: 'Album 3',
      
      price: " ₹9.99",
      
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      
      quantity: 1,
      
      }
      ,
      {
        id:"4",
        title: 'Album 4',
        
        price: " ₹19.99",
        
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        
        quantity: 1,
        
        }
        ,
        {
          id:"5",
          title: 'T-Shirt',
          
          price: " ₹19.99",
          
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
          
          quantity: 1,
          
          }
          ,
          {
            id:"6",
    
            title: 'Coffee Cup',
            
            price: "₹19.00",
            
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
            
            quantity: 1,
            
            }
    
    ]
  return (
    <div>
<Text></Text>
    <Album item={cartElements}></Album>
    <Footer></Footer> 
    </div>
  )
}
