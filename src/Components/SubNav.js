import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route, NavLink
  } from "react-router-dom";
import data from '../data'


  const SubNav = () => {

    const [products] = useState(data[0])

    console.log(products)

    return(

        <div className='sub-nav'>
          
          {products.mac.map(item => (

          <div className='sub-nav-items'>{item}</div>
          ))}

        </div>
        
    )

  }


  export default SubNav;