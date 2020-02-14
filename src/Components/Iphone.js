import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SubNav from './SubNav';
  



  const Iphone = () => {


    return(

        <div className='sub-nav-iphone'>

          <SubNav/>

        </div>

    )

  }


  export default Iphone;