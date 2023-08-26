import React from 'react'
import "./TextContent.css"
import play from "./play.png"
export default function TextContent() {
    return (
        <div className="textcontent">
            <h6>Get our Latest Album
            </h6>
            <div className="paly">
                <img src={play} style={{margin:"30px 0px" ,height:"80px" }}></img>
            </div>
        </div>
    )
}
