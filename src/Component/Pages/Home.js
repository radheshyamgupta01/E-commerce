import React from 'react'
import "./Home.css"
import Text from '../../Text'
import Footer from '../Footer/Footer'
import Text1 from '../../Text1'
export default function Home() {
  const dumyData = [{
    date: "JUL16",
    state: "DETROIT, MI",
    location: "DTE ENERGY MUSIC THEATRE"
  }
    , {
    date: "JUL16",
    state: " TORONTO,ON",
    location: " BUDWEISER STAGE"
  }
    , {
    date: "JUL11",
    state: "BRISTOW, VA",
    location: "JIGGY LUBE LIVE"
  }
    , {
    date: "JUL10",
    state: "DETROIT, MI",
    location: "DTE ENERGY MUSIC THEATRE"
  }
    , {
    date: "JUL5",
    state: "DETROIT, MI",
    location: "DTE ENERGY MUSIC THEATRE"
  }
    , {
    date: "JUL15",
    state: "DETROIT, MI",
    location: "DTE ENERGY MUSIC THEATRE"
  }
    , {
    date: "JUL30",
    state: "DETROIT, MI",
    location: "DTE ENERGY MUSIC THEATRE"
  }


  ]
  return (

    <div>

      <Text1></Text1>
      <ul>
        <h2 style={{ textAlign: "center", margin: "10px" }}> TOURS</h2>
        {dumyData.map((item) => {
          return <div className="buytiktcontainer">
            <li className="buyticktes" >

              <span>
                {item.date}
              </span>
              <span> {item.state}</span>
              <span className="location">
                {item.location}
              </span>

              <span> <button style={{ display: "inline-block" }}>BUY TICKTES</button></span>

            </li>

          </div>


        })}



      </ul>


      <Footer></Footer>
    </div>

  )
}
