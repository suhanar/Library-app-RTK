import React,{useState} from 'react';
import Header from './Header';
import Panel from './Panel';
import Book from './Book';
import Welcome from './Welcome';
import {actions} from '../store/index';
import { useSelector,useDispatch } from 'react-redux';

function Home({lookBook}) {
  
  const show = useSelector((state)=> state.show);
  const dispatch = useDispatch()
  return (
    <div className="App">
      {show&&<Welcome show={show} onClose={()=>dispatch(actions.setShow())} />}
      
      <div className='header'>
       

       
        {/* <Header lookBook={lookBook} /> */}
        <Header  />
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