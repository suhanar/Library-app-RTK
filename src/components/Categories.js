import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {actions} from '../store/index';

function Categories() {
  const dispatch = useDispatch();
    const category = ['Fiction','Comedy','Adventure','Ghost','Thriller','Drama','Poetry','American Drama','News']
  return (
    <div className='category'>
        <h6>Search By Categories</h6>
        <div className='category-inner'>
        {
            category.map((el,i)=>(
                <div className='category-btn'>

                <button key={i} value={el} onClick={(e)=>dispatch(actions.setSearch(e.target.value.toLowerCase()))}>{el}</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Categories