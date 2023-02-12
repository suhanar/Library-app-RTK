import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../store';
import Header1 from './Header1';

function Favorite() {
  const favorite = useSelector((state)=> state.favorite);
  const dispatch = useDispatch();
  return (
    <div  className='listadd-div'>
    <Header1 />
    
    {favorite.length!== 0
?
favorite.map((el)=> {
  return(
    <div className='listadd' key={el.id}>
    <img src={el.image} />
    <h6>{el.title}</h6>
    <i class="fa fa-trash" aria-hidden="true" onClick={()=>dispatch(actions.removeFavorite(el.id))}></i>
 </div>
   )
  }) : (<div><h1>No Books in your Favorite list</h1></div>)

      
      
      }</div>
  )
}

export default Favorite