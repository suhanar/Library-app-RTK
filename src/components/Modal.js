import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {actions} from '../store/index';

function Modal({onClose,bookItem,show}) {
 
  if(!show){
    return null;
}


let thumbnail=bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
return (
<div>

    <div className='modal'>
       <div className='modal-inner'>
       <button className="close" onClick={onClose}><i class="fa fa-times"></i></button>
       <div className='modal-inner-div'>

       <img src={thumbnail} alt="" />
       </div>
       <h1>{bookItem.volumeInfo.title}</h1>
        <h3>{bookItem.volumeInfo.authors}</h3>
        <h4>{bookItem.volumeInfo.publisher}<span>{bookItem.volumeInfo.publishedDate}</span></h4><br/>
        <a href={bookItem.volumeInfo.previewLink}><button>More</button></a>
        <h4 className="description">{bookItem.volumeInfo.description}</h4>

       </div>
    </div>

    

    
</div>
)
}

export default Modal