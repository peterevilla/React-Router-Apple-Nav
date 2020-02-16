import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route, NavLink
  } from "react-router-dom";
import data from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from "@fortawesome/free-brands-svg-icons";


  const SubNav = props => {

    const [products] = useState(data)
    const param = props.match.path;

    const item = products.find(item => {
      let str = param;
      str = str.substring(1);
      return item.name === str;
    });
    

    
    console.log(param)
    console.log(item.models)

    return (

        <div className='sub-nav'>
          
          { item.models.map(ele => (

          <div className='sub-nav-items'>

        <a href='#'>  
        <FontAwesomeIcon className='icon-pro' icon={faApple}/><br/>
        {ele}</a>
            
          </div>
          ))}

        </div>

        // <p>hola</p>
       
       
    )

  }


  export default SubNav;