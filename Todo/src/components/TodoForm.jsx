import React from "react";

export default function TodoForm() {

    return (   

      <div className="fixed bg-black bg-opacity-75 min-h-full min-w-full z-50 top-0">
        <div className="bg-white shadow-xl flex flex-col items-start px-4 py-4 w-96 gap-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

<div>
  <p>Date</p>
  <input className="border border-solid px-2  border-black rounded-xl" type="datetime" name="" id="" />
</div>

<div>
  <p>Description</p>
  <textarea className="border border-solid border-black"></textarea>
</div>

<div className="flex gap-2 items-center justify-between w-full">
  <div>
    <select className="py-1">
      <option value="">Selecione uma categoria</option>
      <option value="Casa">Casa</option>
      <option value="Estudos">Estudos</option>
      <option value="Trabalho">Trabalho</option>              
    </select>
  </div>
  <div>
    <button className="border border-solid border-black px-4 py-1 rounded-full hover:scale-105 transition-transform" type="submit">
      Create
    </button>
  </div>
</div>

</div>
              
      </div>
    )
  

}