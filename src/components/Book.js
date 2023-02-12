import React from 'react';
import Cards from './Cards';
import { useSelector,useDispatch } from 'react-redux';
import About from './About';

import CarouselPoetry from './Carousel';
import CarouselFiction from './CarouselFiction';
import CarouselDrama from './CarouselDrama';


function Book({lookBook}) {
  const search = useSelector((state)=> state.search)
  return (
    <div className='book-div' >

{
        search === '' ? 
        <div>
           <CarouselPoetry /> 
           <CarouselFiction />
           <CarouselDrama />

         
        

        </div>
       
        : <Cards />

      
      
  
        }   
     
     

     
    

    
    
</div>
     
  )
}


export default Book