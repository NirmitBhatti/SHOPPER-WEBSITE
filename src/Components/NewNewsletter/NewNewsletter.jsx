import React from 'react'
import "./NewNewsletter.css";
const NewNewsletter = () => {
  return (
    <div className='Newsletter'>
          <h1>Get Exclusive News Letter</h1>
          <p>Subscribe To Our News Letter</p>
          <div>
              <input type='email' placeholder='Your Email id' />
            <button>Subscribe</button>
          </div>
    </div>
  )
}

export default NewNewsletter
