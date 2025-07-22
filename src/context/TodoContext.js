import { useContext,createContext } from "react";

export let TodoContext=createContext({
   todos:[
    {
        id:1,
        todo:'todo msg',
        completed:false
    }
]  ,               
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export let TodoProvider=TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
}

