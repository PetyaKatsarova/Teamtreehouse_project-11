import React from 'react';
//import Search from './Search';
import Form from './Form';
import Nav from './Nav';

const Header = (props) =>{
  return(
     <div>
         <Form history = {props.history} handleSubmit = {props.handleSubmit} />
         <Nav />
     </div>     
  );
}

export default Header;