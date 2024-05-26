import { useState } from "react";

export default function NewTask({handleAddTask}){
    const[enteredTask,setEnteredTask] = useState('');
    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
        handleAddTask(enteredTask);
        setEnteredTask('')
    }
    return(
        <div className="flex justify-between gap-2 my-4">
            <input className = "p-4 bg-stone-200 rounded-md border-black" type="text" onChange = {handleChange} value={enteredTask}/>
            <button className="p-4 bg-stone-900 text-white hover:bg-red-500 hover:text-white rounded-md" onClick = {handleClick}>Add</button>
        </div>

    );
}