import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {actions} from '../store/index';

function Search({lookBook}) {

    const search = useSelector((state)=> state.search);
    const dispatch = useDispatch();
    console.log('search',search);

    const handleChange=(e)=>{
      dispatch(actions.setSearch(e.target.value));
      lookBook();
    }
  return (
    <div className='search'>
        <input type="text" placeholder="Search for your favorite books....." value={search} onChange={handleChange}  />
        <i class="fa fa-search"></i>
    </div>
  )
}

export default Search