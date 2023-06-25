import React from "react";

export default function TodoForm(isOpen) {

    if (isOpen) {
    return (
      <div className="bg-white shadow-xl flex flex-col items-start px-4 py-4 w-80 gap-4 rounded-xl">

        <div>
          <p>Date</p>
          <input type="datetime" name="" id="" />
        </div>

        <div>
          <p>Description</p>
          <textarea></textarea>
        </div>

        <div className="flex gap-2">
          <div>
            <select>
              <option value="">Selecione uma categoria</option>
              <option value="Casa">Casa</option>
              <option value="Estudos">Estudos</option>
              <option value="Trabalho">Trabalho</option>              
            </select>
          </div>
          <div>
            <button type="submit">
              Create
            </button>
          </div>
        </div>

      </div>
    )
  }

  return null

}