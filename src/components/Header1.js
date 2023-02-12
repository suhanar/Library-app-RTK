import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

function Header1() {
  return (
    <div className='header1'>
         <div className='booklist-header'>
         <Link to='/'>
             <button className='home-btn'>Home</button></Link>
          </div>
         
          
    </div>
  )
}

export default Header1