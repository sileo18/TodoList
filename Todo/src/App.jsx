import { useState } from 'react'
import React from 'react'

import './index.css'

import TodoTask from './components/Todo'
import Header from './components/Header';
import ButtonNewTask from './components/ButtonNewTask';
import TodoForm from './components/TodoForm';


function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: 'Comprar pão',
      category: 'Casa',
      date: '18 Feb',
      done: false,
    },
    {
      id: 2,
      text: 'Lavar louça',
      category: 'Casa',
      date: 'Today',
      done: false,
    },
    {
      id: 3,
      text: 'Terminar sistema login',
      category: 'Trabalho',
      date: 'Tomorrow',
      done: false,

    },
    {
      id: 4,
      text: 'Terminar sistema registro',
      category: 'Trabalho',
      date: 'Yesterday',
      done: false,

    }
  ])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='min-h-screen'>
      
        <Header />

      <div className='flex justify-around px-4 py-4'>

        {todo.map((todo) => (                    
            
            <TodoTask todo={todo} />
          
        ))}  
        
      </div>

      {/* Button New Task */}

      <ButtonNewTask setIsOpen={setIsOpen} />

     {/* Todo Form */}   

      {isOpen ? <TodoForm /> : null}

    </div>

    
  )
}

export default App
