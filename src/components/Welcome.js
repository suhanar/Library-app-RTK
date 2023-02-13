import React from 'react'

function Welcome({onClose,show}) {
  return (
    <div className='welcome'>
        <div style={{float:'right',margin:'10px'}}>
        <button style={{cursor:'pointer',backgroundColor:'red',padding:'4px 5px',border:'none',color:'white',fontWeight:700}}  onClick={onClose}>x</button>
        </div>
        <div style={{marginTop:'40px',padding:'10px',display:'flex',flexDirection:'column',textAlign:'center'}}>
            <h4>Library App</h4>

        <p >

           
Welcome to Library-App.Here you can search for your favorite books.And you can add it to your favorite list and also in the My Reading List.
</p>

        </div>
        
    </div>
  )
}

export default Welcome