import React from "react";
import { AiOutlinePlus } from 'react-icons/ai'

export default function ButtonNewTask( { setIsOpen } ) {  
  
  return (
    <div className='px-6 py-4 fixed bottom-0 left-o'>
        
        <button onClick={ () => setIsOpen(true)} className='bg-orange-cool rounded-full p-2 hover:scale-110 transition-transform'>
          <AiOutlinePlus color='#ffffff' />
        </button>

    </div>
  )
}