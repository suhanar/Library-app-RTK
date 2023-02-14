import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactSimplyCarousel from 'react-simply-carousel';
import { useSelector,useDispatch } from 'react-redux';
import Modal from './Modal';


function CarouselDrama() {
  const drama = useSelector((state)=>state.drama)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [show,setShow] = useState(false);
  const [bookItem,setBookItem] = useState();
 

  return (
    <div className='carousel-hide-res'>
      <h4 style={{color:'white',marginLeft:'0px'}}>Books based on Drama</h4>
      <div className='simply-carousel '>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
           
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 750,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
         {
          drama.map((el)=>{

            let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
          let price =el.saleInfo.listPrice&&el.saleInfo.listPrice.amount ;
          let rating = el.volumeInfo.averageRating;
          if(thumbnail != undefined && price != undefined){
            //console.log(poetry.length)
            return(
              <div className='cards-inner1' style={{ }}
              onClick={()=>{setShow(!show);setBookItem(el)}} >

              <div className='img-div'><img src={thumbnail} /></div>
              <div className='carousel-inner'>
              <div><h5>{el.volumeInfo.title}</h5>
              <p>{el.volumeInfo.authors}</p> </div>
             
               <div>{rating? Array.from(new Array(Math.ceil(rating)), () =><i style={{color:'yellow',fontSize:'12px'}}class="fa fa-star"></i> ): 
             <p style={{color:'yellow',fontSize:'12px'}}>No ratings</p>}
             ${price}</div>
              </div>
              
              
    
              </div>
            )
          }
          })
        } 
 
       
      </ReactSimplyCarousel>
      </div>

      {
      show && <Modal bookItem={bookItem} onClose={()=>setShow(false) } show={show} />
    
     }  
    </div>
  );
}

export default CarouselDrama;
