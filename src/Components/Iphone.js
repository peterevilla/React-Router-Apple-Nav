import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SubNav from './SubNav';
  



  const Iphone = props => {


    return(

        <div className='sub-nav-iphone'>

          <SubNav match={props.match}/>

        </div>

    )

  }


  export default Iphone;