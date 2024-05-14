import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Context/TodoContext';
import uuid from 'react-native-uuid';

const TaskForm = () => {

    const [task,setTask] = useState("");
    const [list,setList] = useContext(TodoContext);

    const AddTask = (e) => {

        e.preventDefault();

        if(task ==='' || task === undefined) {

            alert(" Plz enter Task");
        } 


            const newList = [...list,{id:uuid.v4(),title:task,status:false}]

            setList(newList);
            setTask('');

       

        

        // console.log(newList)


    } 

    useEffect(() => {

        localStorage.setItem('updatelist', JSON.stringify(list))
    
    
      }, [list])



    return (

        <>

            <div className="formcontainer">

                <input type="text" 
                        className='formcontainer-input'
                        placeholder='Enter task' 
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                />

                <button className='formcontainer-button' onClick={(e) => AddTask(e)}>
                    
                     Add 
                     
                </button>

            </div>
        
        </>
    )
}

export default TaskForm