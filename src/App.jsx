
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { useEffect } from 'react'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
function App() {
  let [todos,setTodos]=useState([])

  let addTodo=(todo)=>{
  setTodos((prev)=>[{ id:Date.now(),...todo},...prev])
  }

  let updateTodo=(todo,id)=>{ 
  setTodos((prev)=>prev.map((prevTodo)=>{
   (prevTodo.id === id ? todo: prevTodo)
  }))
  }

  let deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((prevTodo)=>
   prevTodo.id !== id
  ))
  }

let toggleComplete=(id)=>{
  setTodos((prev)=> prev.map((prevTodo)=>
    prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed }: prevTodo
  ))
}

useEffect(() => {
  let todos= JSON.parse(localStorage.getItem('todos'))

  if(todos && todos.length > 0){
    setTodos(todos)
  }
}, [])

useEffect(()=>{
 localStorage.setItem('todos',JSON.stringify(todos))


},[todos])

 
  return (
   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                           <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
