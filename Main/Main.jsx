import React from 'react';
import './Main.css';
import { assets } from '../src/assets/assets';

 const Main = () => {

  return (
<>


    <div className='main'>

     <div className="nav">

        <p> Gemini </p>
        <img src={assets.user_icon} alt="" />

     </div>

      <div className="main-container">

        <div className="greet">

          <p> <span> Hello, Sayed </span></p>
          <p>How Can I Help You</p>
        </div>

        <div className="cards">
          
          <div className="card">

          <p>Suggest me the beautiful Movie in this month Buddy!! </p>
          <img src={assets.compass_icon} alt="" />

          </div>

        <div className="card">

       <p> What are the main Concepts for OOPS in Java </p>
       <img src={assets.bulb_icon} alt="" />

      </div>

      <div className="card">

    <p> Generate me an random fact about this Earth </p>
    <img src={assets.message_icon} alt="" />

    </div>
     
       <div className="card"> 
       <p> How Can I Improve My Coding Skills   </p>
       <img src={assets.code_icon} alt="" />
       {/* </div> */}
      
        </div>
          
        </div> {/*Ending the dic cards */}
     
      </div>

    </div>

</>

  )
}

export default Main;