import React from 'react';
import Header from './Header';
import Panel from './Panel';
import Book from './Book';

function Home({lookBook}) {
  return (
    <div className="App">
      <div className='header'>
       

       
        <Header lookBook={lookBook} />
      </div>

      <div className='side-by-side'>

      <div className='panel'>
        <Panel/>
      </div>

      <div className='book'>
        
        <Book />
      </div>

      </div>


       

     

     
     
    </div>
  )
}

export default Home