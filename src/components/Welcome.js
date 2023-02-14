import React from 'react'

function Welcome({onClose,show}) {
  return (
    <div className='welcome'>
        <div className='welcome-div' style={{}}>
        <button className='welcome-btn' style={{}}  onClick={onClose}>x</button>
        </div>
        <div className='p-h4' style={{}}>
            <h4>Library App</h4>

        <p >
          
            Welcome to Library-App....
            
            Here you can search for your favorite books.
            
          You can add it to your favorite list and also in the My Reading List.
          You can see most recently viewed book in the tab 'Recently Viewed'.
            Also if you want to see the details click the book image.
          

           


</p>

        </div>
        
    </div>
  )
}

export default Welcome