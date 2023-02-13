import { configureStore,createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const API_KEY = process.env.REACT_APP_API_KEY;

const Favoriteitems = localStorage.getItem("userFavoriteRedux") !== null? 
JSON.parse(localStorage.getItem("userFavoriteRedux")):[];

const addItemsBook= localStorage.getItem("userAddRedux") !== null? 
JSON.parse(localStorage.getItem("userAddRedux")):[];

const initialState = {
    book : [],
    loading:false,
    error:'',
    search:'',
    bookList: addItemsBook,
    favorite:Favoriteitems,
    filterList:[],
    carousel:[],
    fiction:[],
    drama:[],
    poetry:[],
    show:true
    
   
}


// export const fetchBook=createAsyncThunk('book/fetchBook',async ()=>{
//     const res= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
//         .then(res=>res.data.items)
  
//     return res;
// })


  
 


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
           
        },
        removeFavorite: (state,action)=>{
           
        

        state.favorite.splice(state.favorite.findIndex((arrow) => arrow.id === action.payload), 1);
        localStorage.setItem("userFavoriteRedux", JSON.stringify(state.favorite))
       
        },
        removeItem:(state,action)=>{

            state.bookList.splice(state.bookList.findIndex((arrow) => arrow.id === action.payload), 1);
            localStorage.setItem("userAddRedux", JSON.stringify(state.bookList))
          
        },
        addItem:(state,action)=>{
            state.bookList.push(action.payload);
            localStorage.setItem("userAddRedux", JSON.stringify(state.bookList.map((item)=>item)))
        

        },
        CarouselBookPoetry: (state,action)=>{
           
                state.poetry = action.payload;
                state.poetry.shift();
          
            
        },
        CarouselBookDrama : (state,action)=>{
            state.drama = action.payload
        },
        CarouselBookFiction : (state,action)=>{
            state.fiction = action.payload
        },
       

        setShow : (state,action)=>{
            state.show = false;
        }
      

    },

    // extraReducers:(builder)=>{
       
    //     builder.addCase(fetchBook.pending,state=>{
    //         state.loading = true;
    //         console.log('loading');
    //     })
    //     builder.addCase(fetchBook.fulfilled,(state,action)=>{
    //         state.loading = false;
    //         state.book = action.payload;
    //         state.error='';
    //         console.log('fulfilled');
    //     })
    //     builder.addCase(fetchBook.rejected,(state,action)=>{
    //         state.loading = false;
    //         state.book = [];
    //         state.error = action.error.message;
    //     })

    // }
})

const store = configureStore({
    reducer : bookSlice.reducer,
    // storage:loadFromLocalStorage()
    
})


export const actions = bookSlice.actions;
export default store;
