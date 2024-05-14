import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../Context/TodoContext'

const TodoList = (props) => {

  const [list,setList] = useContext(TodoContext)

// ***************************************************************************************
  const changeStatus = (e) => {

    const updatedStatusTask = list.map((task) => {

      console.log(task)

      if(task.id === e.target.value) {

        task.status = false;

        if(e.target.checked){

          task.status = true;
        }
      }

      return task;
      
    })

    setList(updatedStatusTask)
  }


  // ********************************************************************

  const deleteTask = (e) => {

    console.log(e.target.id)

    e.preventDefault();

    const updatedAfterdelete_List = list.filter((task) =>{

      return task.id !== e.target.id;
      
      
    })

    setList(updatedAfterdelete_List);
  }



// ******************************************************************

const taskStatus = props.status ? 'checked' : '';


// ********************************************************************************

  return (

    <>

        <p className="todoList">

            <input type="checkbox" checked = {taskStatus} id={props.id} value={props.id} onChange={(e) => changeStatus(e)} />
            <label htmlFor={props.id}> {props.title}</label>
            <button id={props.id} className="todo-delete" onClick={(e) => deleteTask(e)}> Delete </button>


        </p>
    
    </>
  )
}

export default TodoList