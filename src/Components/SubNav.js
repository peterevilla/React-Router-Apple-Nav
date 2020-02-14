import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route, NavLink
  } from "react-router-dom";
import data from '../data'


  const SubNav = props => {

    const [products] = useState(data)
    const param = props.match.path;

    

    console.log(data)

    return(

        // <div className='sub-nav'>
          
        //   { products.Mac.map(item => (

        //   <div className='sub-nav-items'>{item}</div>
        //   ))}

        // </div>
        <p>hola</p>
    )

  }


  export default SubNav;