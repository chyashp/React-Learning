import { useState } from "react";
import { useTodoContext } from "../context";



function TodoForm() {
    const [todo, setTodo] = useState('');
    
    const {addTodo} = useTodoContext();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;

        //we are going to take all properties of todo object - where id is already defined with function
        addTodo({ todoText: todo, completed: false});
        //to empty the placeholder of todo
        
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo.todoText}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

