import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return(
    <nav className='main-nav'>
        <ul>
            <li><NavLink to="/sunflowers" >Sunflowers</NavLink></li>
            <li><NavLink to="/frogs" >Frogs</NavLink></li>
            <li><NavLink to="/africa" >Africa</NavLink></li>
        </ul>
    </nav>
  );
}

export default Nav;
