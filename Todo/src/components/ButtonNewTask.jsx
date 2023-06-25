import React from "react";
import { AiOutlinePlus } from 'react-icons/ai'

export default function ButtonNewTask() {

  
  return (
    <div className='px-6 py-4 fixed bottom-0 left-o'>
        
        <button onClick={ () => {console.log('clicou')}} className='bg-orange-cool rounded-full p-2 hover:scale-110 transition-transform'>
          <AiOutlinePlus color='#ffffff' />
        </button>

    </div>
  )
}