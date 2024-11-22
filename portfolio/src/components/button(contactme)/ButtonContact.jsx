import React from 'react'
import ContactMe from '../Contact me/ContactMe'

function ButtonContact() {
    const click=()=>{
        <ContactMe/>
    }
  return (
    <div>
        <div className='button'>
            <button onClick={click}>Contact Me</button>
        </div>
      
    </div>
  )
}

export default ButtonContact
