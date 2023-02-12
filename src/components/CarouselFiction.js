import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactSimplyCarousel from 'react-simply-carousel';
import { useSelector,useDispatch } from 'react-redux';
import Modal from './Modal';

function CarouselFiction() {
  const fiction = useSelector((state)=>state.fiction)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [show,setShow] = useState(false);
  const [bookItem,setBookItem] = useState();
 

  return (
    <div>
      <h4 style={{color:'white',marginLeft:'0px'}}>Books based on Fiction</h4>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
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
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
         {
          fiction.map((el)=>{

            let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
          let price =el.saleInfo.listPrice&&el.saleInfo.listPrice.amount ;
          if(thumbnail != undefined && price != undefined){
            //console.log(poetry.length)
            return(
              <div className='cards-inner1' style={{ width: 300, height: 300,backgroundColor:'black',color:'white'}} 
              onClick={()=>{setShow(!show);setBookItem(el)}}>

              <div className='img-div'><img src={thumbnail} /></div>
              <div className='carousel-inner'>
              <div>{el.volumeInfo.title} </div>
              <span>By</span>
               <div>{el.volumeInfo.authors}</div>
              <div>{price}</div>
              </div>
              
              
    
              </div>
            )
          }
          })
        } 
 
       
      </ReactSimplyCarousel>

      {
      show && <Modal bookItem={bookItem} onClose={()=>setShow(false) } show={show} />
    
     }  
    </div>
  );
}

export default CarouselFiction;
