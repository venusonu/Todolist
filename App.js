import React from 'react'
import Todolist from './Todolist'

const App = () => {
    const[task,setTask]=React.useState("")
    const[todos,setTodo]=React.useState([])
    const changeHandler=e=>{
        setTask(e.target.value);
    }
    const submitHandler=e=>{
        e.preventDefault();
        const newTodos=[...todos,task]
        setTodo(newTodos)
        setTask("")
            }
    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!=indexValue)
        setTodo(newTodos)
    }
  return (
    <div>
      <center>
         
          <h1>To Do List</h1>
          <form onSubmit={submitHandler}>
              <input type="text" value={task} onChange={changeHandler} />&nbsp;&nbsp;
              <input type="submit" value="Add"/>
          </form>
          <Todolist todos={todos} deleteHandler={deleteHandler} />
      </center>
    </div>
  )
}

export default App
