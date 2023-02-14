import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header1 from './Header1';
import {actions} from '../store/index';

function Viewed() {
    const viewed = useSelector((state)=>state.recently)
    const viewedLength = useSelector((state)=>state.viewedLength)
    const dispatch=useDispatch();
  return (
    <div  className='listadd-div'>
    <Header1 />
    <div className='listadd-div-inner'>
      <h1>Most recently Viewed</h1>
    <div>
        {
            //.slice(-10).reverse()
            viewed.length!==0?viewed.slice(-10).reverse().map((el,i)=>{

                return(
                    <div className='listadd' key={el.id}>
                    <img src={el.image} />
                    <h6>{el.title}</h6>
                    
                    {/* <i class="fa fa-trash" aria-hidden="true" onClick={()=>dispatch(actions.removeViewed(el.id))}></i> */}
                 </div>
                   )
                  }) : (<div><h1>No Books in your recently viewed list</h1></div>)
                
        }
                </div>
                </div>
                      
                    
    </div>
 ) 
}

export default Viewed