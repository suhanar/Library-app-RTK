import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {actions} from '../store/index';
import Modal from './Modal';

function Cards() {
    const book = useSelector((state)=> state.book);
    const dispatch = useDispatch();
    const favorite = useSelector((state)=> state.favorite);
    const filterList = useSelector((state)=>state.filterList)
    const bookList = useSelector((state)=>state.bookList)
    const [show,setShow] = useState(false);
  const [bookItem,setBookItem] = useState();
  
   
   // console.log("favorite",favorite)
   console.log(book)
    
    return(
    <div className='cards-div'>
    {
       book.map((el)=> {
        let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
        let price =el.saleInfo.listPrice&&el.saleInfo.listPrice.amount ;
        let rating = el.volumeInfo.averageRating;
       
        const obj = {
          id:el.id,
          title : el.volumeInfo.title,
          author : el.volumeInfo.authors,
           image : thumbnail
        }
        if(thumbnail != undefined && price != undefined){
          return(
            <div className='cards-inner' key={el.id}  >

               {
                  favorite.some(p=>p.id === el.id)?
                  //<i style={{color:'yellow',fontSize:'12px'}}class="fa fa-star"></i>
                  //Array.from(new Array(rating), () =><i style={{color:'yellow',fontSize:'12px'}}class="fa fa-star"></i> )
                  (<div className='favorite btn1'><i style={{color:'yellow',float:'right'}} onClick={()=>dispatch(actions.removeFavorite(el.id))} class="fa fa-star"></i></div>)
                  :(
                  <div className='favorite btn2'><i style={{float:'right'}} onClick={()=>dispatch(actions.addFavorite(obj))} class="fa fa-star-o"></i></div>)
                }

<div onClick={()=>{setShow(!show);setBookItem(el)}}>
            <div className='img-div'><img src={thumbnail} /></div>
            <div><p>{el.volumeInfo.title.slice(0,60)}</p> </div>
            <span><p>By</p></span>
             <div><p>{el.volumeInfo.authors.slice(0,10)}</p></div>
             <div>{rating? Array.from(new Array(Math.ceil(rating)), () =><i style={{color:'yellow',fontSize:'12px'}}class="fa fa-star"></i> ): 
             <p style={{color:'yellow',fontSize:'12px'}}>No ratings</p>}</div>
             {/* <div>${price}</div>  */}
             </div>


             {
                bookList.some(item=>item.id === el.id)? (  <div className='cards-inner-flex'>

                 <button className='add-remove remove' type="button" onClick={()=>dispatch(actions.removeItem(el.id))}>Remove Book</button>
               
                
                </div> ) :
                 (<div className='cards-inner-flex'>

                  <button className='add-remove add' type="button"  onClick={()=>dispatch(actions.addItem(obj))}>Add Book</button>
                
                 
                 </div>)
              }
              
         
  
            </div>
          
          )
        }   
     })
    
    
    
    }


     {
      show && <Modal bookItem={bookItem} onClose={()=>setShow(false) } show={show} />
    
     }   
    
         

   
  </div>
    )
}

export default Cards