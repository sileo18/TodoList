import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"

export default function TodoForm( { setIsOpen, addNewTask } ) {

  const handleCreateTask = (e) => {
    e.preventDefault()
    
    if (!text || !category || !date) {
      return null
    } 
    addNewTask(text, category, date)
    setIsOpen(false)

  }

  const [text, setText] = useState("")

  const [category, setCategory] = useState("")

  const [date, setDate] = useState("")

    return (   

      <div className="fixed bg-black bg-opacity-75 min-h-full min-w-full z-50 top-0">
        <div className=" bg-white shadow-xl flex flex-col items-start px-4 py-4 w-96 gap-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">


  <div>
     <p>Date</p>
     <input onChange={ ( e ) => setDate(e.target.value) } className="border border-solid px-2 border-black rounded-xl" type="date" name="" id="" />
  </div>

  
    <AiOutlineClose className="absolute right-4 hover:scale-125 transition-transform cursor-pointer" onClick={ () => setIsOpen(false) } />
  
  


<div>
  <p>Description</p>
  <textarea className="border border-solid border-black" onChange={ (e) => setText(e.target.value) }></textarea>
</div>

<div className="flex gap-2 items-center justify-between w-full">
  <div>
    <select className="py-1" onChange={ (e) => setCategory(e.target.value) }>
      <option value="">Selecione uma categoria</option>
      <option value="Casa">Casa</option>
      <option value="Estudos">Estudos</option>
      <option value="Trabalho">Trabalho</option>              
    </select>
  </div>
  <div>
    <button onClick={handleCreateTask} className="border border-solid border-black px-4 py-1 rounded-full hover:scale-105 transition-transform" type="submit">
      Create
    </button>
  </div>
</div>

</div>
              
      </div>
    )
  

}