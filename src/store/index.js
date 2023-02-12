import { configureStore,createSlice,current } from "@reduxjs/toolkit";


const API_KEY = process.env.REACT_APP_API_KEY;

const Favoriteitems = localStorage.getItem("userFavoriteRedux") !== null? 
JSON.parse(localStorage.getItem("userFavoriteRedux")):[];

const addItemsBook= localStorage.getItem("userAddRedux") !== null? 
JSON.parse(localStorage.getItem("userAddRedux")):[];

const initialState = {
    book : [],
    search:'',
    bookList: addItemsBook,
    favorite:Favoriteitems,
    filterList:[],
    carousel:[],
    fiction:[],
    drama:[],
    poetry:[]
   
}


  
 


const bookSlice = createSlice({
    name : 'book',
    initialState ,
    reducers : {
        getBook : (state,action)=> {
            state.book = action.payload
           // console.log('book',state.book)
           
        },
        setSearch :(state,action)=>{
            state.search = action.payload
        },
        addFavorite: (state,action)=>{
            state.favorite.push(action.payload)
            localStorage.setItem("userFavoriteRedux", JSON.stringify(state.favorite.map((item)=>item)))
            //state.favorite=action.payload
            //console.log(state.favorite)
            //console.log('state value',current.state.favorite)
        },
        removeFavorite: (state,action)=>{
           //state.favorite=state.favorite.filter((el)=>el.id !== action.payload.id);
        

        state.favorite.splice(state.favorite.findIndex((arrow) => arrow.id === action.payload), 1);
        localStorage.setItem("userFavoriteRedux", JSON.stringify(state.favorite))
        // localStorage.getItem(
        //     "userFavoriteRedux",
        //     JSON.parse([state.favorite])
        //   )
         



           
            
            //state.favorite = filter
            //state.filterList = filter
        },
        removeItem:(state,action)=>{

            state.bookList.splice(state.bookList.findIndex((arrow) => arrow.id === action.payload), 1);
            localStorage.setItem("userAddRedux", JSON.stringify(state.bookList))
            //console.log(state.bookList)
            // localStorage.setItem(
            //     "userAddRedux",
            //     JSON.stringify([state.bookList])
            //   )
        },
        addItem:(state,action)=>{
            state.bookList.push(action.payload);
            localStorage.setItem("userAddRedux", JSON.stringify(state.bookList.map((item)=>item)))
            //console.log('booklist',state.bookList)
           // localStorage.setItem("userAddRedux", JSON.stringify([state.bookList,action.payload]))

        },
        CarouselBookPoetry: (state,action)=>{
            state.poetry = action.payload
        },
        CarouselBookDrama : (state,action)=>{
            state.drama = action.payload
        },
        CarouselBookFiction : (state,action)=>{
            state.fiction = action.payload
        },
        // setSearch : (state,action)=>{

        // }
      

    }
})

const store = configureStore({
    reducer : bookSlice.reducer,
    // storage:loadFromLocalStorage()
    
})


export const actions = bookSlice.actions;
export default store;