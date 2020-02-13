import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { logDOM } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { apple } from '@fortawesome/free-brands-svg-icons' 





  const NavWrapper = () => {


    return(


      <div className='nav-wrapper'>
        <Link className='links' to={`/`} ><FontAwesomeIcon icon={['fab', 'apple']} /></Link>
        <Link className='links' to={`/Mac`}><p>Mac</p></Link>
        <Link className='links' to={`/Ipad`}><p>Ipad</p></Link>
        <Link className='links' to={`/Iphone`}><p>Iphone</p></Link>
        <Link className='links' to={`/Watch`}><p>Watch</p></Link>
        <Link className='links' to={`/TV`}><p>TV</p></Link>
        <Link className='links' to={`/Music`}><p>Music</p></Link>
        <Link className='links' to={`/Support`}><p>Support</p></Link>
      </div>

    )

  }


  export default NavWrapper;