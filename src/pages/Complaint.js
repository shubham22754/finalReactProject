import React from 'react'
import bg9 from "../Images.png/bg9.png";
import { Link  } from "react-router-dom";
import "../App.css";  

 const Complaint = () => {
   
  return (
    <div>
          <div className='complain_top'> <center>
        <img src={bg9} alt="" width="400px" height="200px"/>
        <h2> Waste Free Haryana</h2>
     </center>
      </div>
      <div> <center>
        <h1>Types of Complaint Forms</h1>
        </center>
      </div>
      
      <div class="navbar" display="flex">
        <section>
      {/* <Link to="/"></Link> */}
      <Link to="/self" target='_blank'>
        <nav classname="navbar"><ul> <li>Self</li>
        </ul></nav> 
      </Link>
    </section>
      </div>
      <div class="navbar">
        <section>
      <Link to="/anonymus" target='_blank'>
        <navbar classname="navbar"><ul><li>Anonymous</li></ul></navbar>
        </Link>
        </section>
      </div>
      <div class="navbar">
        <section>
      <Link to="/Other" target='_blank'>
        <navbar classname="navbar"><ul><li>Others</li></ul></navbar> 
        </Link>
        </section>
    </div>
    <br/>
    <div classname='footer'>
    <b> Why Should you Complaint</b>
     <section>
     <ul>
      <li>
        <b>Environment Legacy :</b>
        </li> 
      Complaining about waste is not just a act of present but it is a gift of future. 
      <li>
        <b>Community Empowerment:</b>
        </li>
       Your Complaint has the power to rally your community towards positive change.
      <li>
        <b>Global Citizenship:</b>
        </li>
       When you complaint about your waste,you're playing a lead role in gobal citizenship.
     </ul>
     </section>
    </div>
    </div>
  );
  }

 export default Complaint;