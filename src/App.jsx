import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('Todo')) || []
  })
 

  useEffect(() => {
    localStorage.setItem('Todo', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Header />
      <Hero todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
