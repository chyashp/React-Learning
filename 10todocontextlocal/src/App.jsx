  import { useEffect, useState } from 'react'
  import './App.css'
  import { TodoContextProvider } from './context/index'
  import { TodoForm, TodoItem } from './components';

  function App() {
    const [todo, setTodo] = useState([]);

    const addTodo=(todo)=> {
      console.log("todo: " + JSON.stringify(todo))
      setTodo((prev)=> [{id: Date.now(), ...todo}, ...prev])
    }

    const updateTodo =(id, todo) => {
      setTodo((prevTodo)=> prevTodo.map((eachTodo) => (eachTodo.id === id) ? todo : eachTodo));
    }

    const deleteTodo = (id) =>{
      setTodo((prev) => prev.filter((eachTodo) => {eachTodo.id !== id}))
    }

    const toggleComplete=(id)=> {
      setTodo((prevTodo) => prevTodo.map(eachTodo=> eachTodo.id === id ? {...eachTodo, completed : !eachTodo.completed} : prevTodo))
    }
useEffect(() => {
  console.log("STATE:", todo);
}, [todo]);

    useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todo"));

      if(todos && todos.length > 0){
        setTodo(todo)
      }
    }, []);


    useEffect(()=> {
      localStorage.setItem("todo", JSON.stringify(todo))
      console.log(todo)
    }, [todo]);





    return (
      <TodoContextProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {console.log(todo)}
              {todo.map((todoItem)=>(
                <div key={todoItem.id} className='w-full'>
                  <TodoItem todo={todoItem}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    )
  }

  export default App
