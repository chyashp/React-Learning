import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state=> state.todos)

    const[editId, setEditId] =useState(null);
    const[edittext, setEdittext] =useState('');
    

    const dispatch = useDispatch();



    const handleUpdate =(todo) => {
        setEditId(todo.id)
        setEdittext(todo.text)
    }

    const handleSave=(id)=>{
        dispatch(updateTodo({id, text: edittext }));
        setEditId(null)
        setEdittext('')
    }
 
  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
         <li
  key={todo.id}
  className="mt-4 flex items-center justify-between gap-4 
             bg-zinc-900/80 border border-zinc-700 
             px-4 py-3 rounded-xl shadow-sm 
             hover:border-zinc-600 transition"
>
  {/* Text / Input */}
  <div className="flex-1">
    {editId === todo.id ? (
      <input
        value={edittext}
        onChange={(e) => setEdittext(e.target.value)}
        autoFocus
        className="w-full bg-zinc-800 text-white 
                   px-3 py-2 rounded-lg 
                   border border-zinc-600
                   focus:outline-none focus:ring-2 
                   focus:ring-indigo-500 transition"
      />
    ) : (
      <p className="text-zinc-100 text-lg break-words">
        {todo.text}
      </p>
    )}
  </div>

  {/* Buttons */}
  <div className="flex items-center gap-2">
    {editId === todo.id ? (
      <button
        onClick={() => handleSave(todo.id)}
        className="px-4 py-2 rounded-lg 
                   bg-emerald-500 hover:bg-emerald-600 
                   text-white text-sm font-medium
                   transition"
      >
        Save
      </button>
    ) : (
      <button
        onClick={() => handleUpdate(todo)}
        className="px-4 py-2 rounded-lg 
                   bg-indigo-500 hover:bg-indigo-600 
                   text-white text-sm font-medium
                   transition"
      >
        Edit
      </button>
    )}

    <button
      onClick={() => dispatch(removeTodo(todo.id))}
      className="px-4 py-2 rounded-lg 
                 bg-red-500 hover:bg-red-600 
                 text-white text-sm font-medium
                 transition"
    >
      Delete
    </button>
  </div>
</li>
        ))}
      </ul>
    </>
  )
}

export default Todos    