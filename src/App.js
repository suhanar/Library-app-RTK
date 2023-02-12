import {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';

import {actions} from './store/index';
import { useSelector,useDispatch } from 'react-redux';

import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import Favorite from './components/Favorite';

const API_KEY = 'AIzaSyC3jVLIYb8-6yobnr4DBvTvI_sNxzG_wHs';

function App() {
  const book = useSelector((state)=> state.book);
  const search = useSelector((state)=> state.search);
  const carousel = useSelector((state)=>state.carousel)
  const dispatch = useDispatch();
  

 
//&maxResults=${40}
  const lookBook =(e)=>{
    //console.log('looookk')
   const res= axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
    .then(res=>dispatch(actions.getBook(res.data.items))).catch((err)=>console.log(err))

   


  }
//+inauthor
  const carouselBookPoetry =(e)=>{
    //console.log('looookk')
   const res= axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:poetry+inauthor&key=${API_KEY}`)
    .then(res=>dispatch(actions.CarouselBookPoetry(res.data.items))).catch((err)=>console.log(err))


  }

  const carouselBookDrama =(e)=>{
    //console.log('looookk')
   const res= axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:drama+inauthor&key=${API_KEY}`)
    .then(res=>dispatch(actions. CarouselBookDrama(res.data.items))).catch((err)=>console.log(err))


  }

  const carouselBookFiction =(e)=>{
    //console.log('looookk')
   const res= axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction+inauthor&key=${API_KEY}`)
    .then(res=>dispatch(actions. CarouselBookFiction(res.data.items))).catch((err)=>console.log(err))


  }

  
  useEffect(()=>{
    lookBook();
   
   
  },[search])

  useEffect(()=>{
    
    carouselBookPoetry();
    carouselBookDrama();
    carouselBookFiction();
   
  },[])


  return (
    

<Routes>
        <Route path='/' element={<Home lookBook={lookBook}/>} />
        <Route path='/list' element={<BookList  />} />
        <Route path='/favorite' element={<Favorite  />} />
     </Routes>
   
  );
}

export default App;
