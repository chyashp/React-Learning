import { createContext, useContext } from "react";

export const TodoContext = createContext({
    
    todo:[
        {
            id:1,
            todoText: "todo text",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete : (id) => {}
})






export const useTodoContext =() =>{
    return useContext(TodoContext)
}


export const TodoContextProvider = TodoContext.Provider
