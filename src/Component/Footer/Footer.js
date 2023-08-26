import React from 'react';
import yoytube from "./y.jpg";
import facbook from "./f.png";
import "./Footer.css";
import  S  from "./S.png"
export default function Footer() {
  return (
    <div className='div'>
      <div>
        <h1>The Generics</h1>
      </div>
      <div>
        <img src={yoytube} alt="youtube Logo" className='imglogo' />
        <img src={facbook} alt="Facebook Logo" className='imglogo' />
        <img src={S} alt="Spotify Logo" className='imglogo' />
      </div>
    </div>
  );
}
