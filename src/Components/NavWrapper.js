import React from 'react'
import { NavLink} from "react-router-dom";
import { logDOM } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";





  const NavWrapper = () => {


    return(


      <nav className='nav-wrapper'>
        <NavLink className='links' className='logo' to={`/`} ><FontAwesomeIcon icon={faApple}/></NavLink>
        <NavLink className='links' to={`/Mac`}><p>Mac</p></NavLink>
        <NavLink className='links' to={`/Ipad`}><p>Ipad</p></NavLink>
        <NavLink className='links' to={`/Iphone`}><p>Iphone</p></NavLink>
        <NavLink className='links' to={`/Watch`}><p>Watch</p></NavLink>
        <NavLink className='links' to={`/TV`}><p>TV</p></NavLink>
        <NavLink className='links' to={`/Music`}><p>Music</p></NavLink>
        <NavLink className='links' to={`/Support`}><p>Support</p></NavLink>
        <NavLink className='links' className='logo' to={`/`} ><FontAwesomeIcon icon={faSearch}/></NavLink>
        <NavLink className='links' className='logo' to={`/`} ><FontAwesomeIcon icon={faShoppingBag}/></NavLink>
      </nav>

    )

  }


  export default NavWrapper;