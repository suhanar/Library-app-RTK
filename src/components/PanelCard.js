import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

function PanelCard() {
    const favorite = useSelector((state)=> state.favorite);
    const bookList = useSelector((state)=>state.bookList)
    const recently = useSelector((state)=>state.recently);
    const list=[{favorite:'Favorite',reading:'My Reading List',recent:'Recently Viewed'}]
    return (
      <div className='panel-card'>
          
          <ul>
              {
                  list.map((el)=>(
  
                      <div className='panel-card-div'>

                        <div className='viewed panel-card-common' key={Math.random()}>


                        
                          <div>
                          <i class="fa fa-solid fa-book"></i>
                          </div>
                          <Link to='/viewed' style={{textDecoration:'none'}}>
                            <div>
                            <button>
                          {el.recent} 
                          </button>
                            </div>
                          
                         
                          </Link>
                          
                          
                          
                      

                        </div>

                   

                      <div className='list panel-card-common' key={Math.random()}>

                      
                          <div>
                          <i class="fa fa-solid fa-book"></i>
                          </div>
                          <Link to='/list' style={{textDecoration:'none'}}>
                            <div className='panel-card-btn'>
                            <button>
                          {el.reading} <span className='panel-card-len'>{bookList.length}</span>
                          </button>
                            </div>
                          
                         
                          </Link>
                          
                          
                          
                      
                      </div>

                      <div className='favorite-list panel-card-common' key={Math.random()}>

                      
                          <div>
                          <i class="fa fa-solid fa-book"></i>
                          </div>
                          <Link to='/favorite' style={{textDecoration:'none'}}>
                            <div>

                            
                          <button>
                          {el.favorite} <span>{favorite.length}</span>
                          </button>
                          </div>
                         
                          </Link>
                          
                          
                          
                      


                      </div>




                         
  
  
  
                      
                     
  
                      </div>
                     
  
  
  
                  ))
              }
          </ul>
      </div>
    )
  }
  
  export default PanelCard