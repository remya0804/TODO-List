import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) =>  {

    const finallist = JSON.parse(localStorage.getItem('updatelist'));

    const [list,setList] = useState(finallist ? finallist : []);

    return (

        <TodoContext.Provider value={[list,setList]} >

            {props.children}

        </TodoContext.Provider>
    )


}