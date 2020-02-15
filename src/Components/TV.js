import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import SubNav from './SubNav';



  const TV = props => {


    return(

      <div className='sub-nav-mav'>

        <SubNav match={props.match}/>
    
      </div>

    )

  }


  export default TV;