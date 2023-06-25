import React from "react"
import '../index.css'

export default function TodoTask( { todo } ) {
  return ( 
    <div className=' h-56 w-80 bg-yellow-cool flex flex-col gap-4 px-7 py-4 rounded-xl shadow-lg items-start justify-center hover:scale-95 transition-transform'>

            <div className='text-base text-black h-1/5'>{todo.date}</div>

            <div className='text-3xl font-light h-2/5'>{todo.text}</div>

            <div className='text-xl font-light h-1/5'>{todo.category}</div>

            <div className='flex gap-8 h-1/5'>

              <div className='flex gap-1'> <input type="checkbox" name="" id="" />
              Done</div>   

              <div className='flex gap-1'> <input type="checkbox" name="" id="" />
              Done</div> 

            </div>  
    </div> 
  )
}