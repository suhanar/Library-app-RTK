import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../store';
import Header from './Header';
import Header1 from './Header1';

function BookList() {
  const bookList = useSelector((state)=>state.bookList);
  const dispatch = useDispatch();
  return (
    <div className='listadd-div'>
      <Header1 />
    
    

   {
    bookList.length!==0? (bookList.map((el)=> {
      // let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
      return(
       <div className='listadd' key={el.id}>
       <img src={el.image} />
       <h6>{el.title}</h6>
       <i class="fa fa-trash" aria-hidden="true" onClick={()=>dispatch(actions.removeItem(el.id))}></i>
    </div>
      )
      
     
       
     })):(<div><h1>'No Books to Show'</h1></div>)
     
   }


   </div>
  )
}

export default BookList