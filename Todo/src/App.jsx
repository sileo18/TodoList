import { useState } from 'react'
import React from 'react'

import './index.css'

import TodoTask from './components/Todo'
import Header from './components/Header';
import ButtonNewTask from './components/ButtonNewTask';
import TodoForm from './components/TodoForm';


function App() {
  const [todo, setTodo] = useState([ {
    id: 1,
    text: "Oi",
    category: "Trabalho",
    date: "22/10/04",
    isDone: false
  }    
  ])

  const [isOpen, setIsOpen] = useState(false)

  const addNewTask = (text, category, date) => {
    const newTask = [
      ...todo,{
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        date,
      }
    ]

    setTodo(newTask)
  }

  const removeTask = (id) => {
    const tasks = [...todo]

    const filteredTasks =  tasks.filter(todo => todo.id !== id ? todo : null)

    setTodo(filteredTasks)
  }

  const doneTask = (id, text, category) => {
    const tasks = [...todo]

    tasks.map(todo => todo.id === id ? todo.isDone = !todo.isDone : todo )

    setTodo(tasks)
  }

  return (
    <div className='min-h-screen'>
      
        <Header />

      <div className='flex flex-wrap gap-2 justify-start items-start px-4 py-4'>

        {todo.map((todo) => (                    
            
            <TodoTask key={todo.id} todo={todo} removeTask={removeTask} doneTask={doneTask} />
          
        ))}  
        
      </div>

      {/* Button New Task */}

      <ButtonNewTask setIsOpen={setIsOpen} />

     {/* Todo Form */}   

      {isOpen ? <TodoForm addNewTask={addNewTask} setIsOpen={setIsOpen} /> : null}

    </div>

    
  )
}

export default App
