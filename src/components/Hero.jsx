import React, { useState } from 'react'
import DeleteTodoBtn from './DeleteTodoBtn'
import Dashboard from './Dashboard'

const Hero = ({todos, setTodos}) => {

  const [input, setInput] = useState("")
  console.log(input)

  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, {id: Date.now(),text: input,completed: false}])
      setInput("")
    }
  }

  const dltTodo = (idx) => {
    const updateTodos = todos.filter((_, index) => index !== idx)
    setTodos(updateTodos)
  }

  const clearAllTodos = () => {
    localStorage.clear()
    setTodos([])
  }

  const completedTodo = (id) => {
    const complete = todos.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo
    })
    setTodos(complete)
  }

   if (todos.length === 0) {
      console.log("empty")
      
    }

  return (
    <div className=' lg:flex justify-center gap-10 m-10'>
      <div className='lg:w-[30%] border rounded flex flex-col p-10 mb-3'>
        <input type="text" placeholder='Enter Todo' className='border rounded p-3 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500' value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="btns flex gap-5">
          <button className='border px-4 py-2 rounded cursor-pointer hover:scale-105 transition-all' onClick={addTodo}>Add</button>
          <button className='border px-4 py-2 rounded cursor-pointer hover:scale-105 transition-all' onClick={clearAllTodos}>Delete All</button>
        </div>

        <Dashboard todos={todos} />
      </div>

      <div className="scroll-kit flex flex-col gap-5 px-5 py-10 rounded border lg:h-130 lg:overflow-auto mb-3">
        {todos.length === 0 ? (
          <div className="lg:w-xl h-full flex items-center justify-center text-slate-400 font-semibold text-lg">
            No pending tasks. Great job! 
          </div>
        ) : (todos.map((todo, idx) => {
          return <div key={idx} className="card border p-3 lg:w-xl flex items-center justify-between font-semibold rounded">
            <div className={`lg:w-xl flex ${
            todo.completed ? "line-through text-gray-400" : ""}`} >
              <input className='mr-5 cursor-pointer scale-200 accent-indigo-500 ' checked={todo.completed} onChange={() => completedTodo(todo.id)} type="checkbox" name="" id="" /> {idx + 1}{")"} {todo.text} 
            </div>
            <DeleteTodoBtn dltTodo={dltTodo} idx={idx} />
          </div>
        }))}
        
      </div>

    </div>
  )
}


export default Hero

