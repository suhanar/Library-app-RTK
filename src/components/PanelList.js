import React from 'react';
import Categories from './Categories';
import PanelCard from './PanelCard';

function PanelList() {
  return (
    <div className='panel-list'>
      <div>
      <PanelCard />
      </div>
      <div className='category-div'>
      <Categories />
      </div>
    
    

</div>
  )
}

export default PanelList