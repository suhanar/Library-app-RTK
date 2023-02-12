import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

function PanelCard() {
    const favorite = useSelector((state)=> state.favorite);
    const bookList = useSelector((state)=>state.bookList)
    const list=[{favorite:'Favorite',reading:'My Reading List'}]
    return (
      <div className='panel-card'>
          
          <ul>
              {
                  list.map((el)=>(
  
                      <div className='panel-card-div'>
                            <li key={Math.random()}>
                          <div>
                          <i class="fa fa-solid fa-book"></i>
                          </div>
                          <Link to='/list'>
                            <div className='panel-card-btn'>
                            <button>
                          {el.reading} <span className='panel-card-len'>{bookList.length}</span>
                          </button>
                            </div>
                          
                         
                          </Link>
                          
                          
                          
                      </li>
  
  
  
                      <li key={Math.random()}>
                          <div>
                          <i class="fa fa-solid fa-book"></i>
                          </div>
                          <Link to='/favorite'>
                          <button>
                          {el.favorite} <span>{favorite.length}</span>
                          </button>
                         
                          </Link>
                          
                          
                          
                      </li>
  
                      </div>
                     
  
  
  
                  ))
              }
          </ul>
      </div>
    )
  }
  
  export default PanelCard