import React from 'react';
import Title from './Title';
import Search from './Search';

function Header({lookBook}) {
  return (
    <div className='header-div'>
    <Title />
    <Search lookBook={lookBook}/>
</div>
  )
}

export default Header