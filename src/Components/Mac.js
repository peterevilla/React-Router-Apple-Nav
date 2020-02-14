import React from 'react'
import {
    BrowserRouter as Router,
    Route, NavLink
  } from "react-router-dom";
import SubNav from './SubNav';




  const Mac = props => {

    console.log(props.match)
    return(

    <div className='sub-nav-mav'>

        <SubNav match={props.match}/>
    
    </div>
      
    )

  }


  export default Mac;