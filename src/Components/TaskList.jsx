import React, { useContext } from 'react'
import TodoList from './TodoList'
import { TodoContext } from '../Context/TodoContext'

const TaskList = () => {

    const [list,setList] = useContext(TodoContext);

  return (

    list.length>=1 
    
                    ? list.map((task) => { return <TodoList 
                        
                                                    key = {task.id}  
                                                    id={task.id}
                                                    title={task.title}
                                                    status={task.status}
                                                    setList = {setList}
                                            />}) 
                    
                    : (<h2>  Task list empty </h2>)

    
  )
}

export default TaskList