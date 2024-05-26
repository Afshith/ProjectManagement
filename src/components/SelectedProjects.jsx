import React from "react";
// import Task from "./Task";
import { useState } from "react";

 function SelectedProjects({ project,onDelete,handleAddTask,handleDeleteTask,tasks}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const[enteredTask,setEnteredTask] = useState('');
  function handleChange(event){
      setEnteredTask(event.target.value);
  }
  function handleClick(){
      handleAddTask(enteredTask);
      setEnteredTask('')
  }
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-gray-300">
        <div className="flex items-center justify-between">
          <h1 className='text-3xl font-bold text-gray-900'>{project.title}</h1>
          <button className="text-white hover:text-gray-950 bg-gray-900  hover:bg-red-500 p-4 hover:text-white rounded-md" onClick={onDelete}>Delete</button>
        </div>
        <p className="mb-4 text-gray-400">{formattedDate}</p>
        <p className="text-gray-600 whitespace-pre-wrap">{project.description}</p>
      </header>
     {/* <Task handleAddTask={handleAddTask}/> */}
     <section>
        <h1 className="text-3xl font-bold test-gray-900 mb-8">Tasks</h1>
        {/* <NewTask handleAddTask={handleAddTask}/> */}
        <div className="flex justify-between gap-2 my-4">
            <input className = "p-4 bg-gray-200 rounded-md border-black" type="text" onChange = {handleChange} value={enteredTask}/>
            <button className="p-4 bg-gray-900 text-white hover:bg-red-500 hover:text-white rounded-md" onClick = {handleClick}>Add</button>
        </div>
        <ul>
          {tasks.map((data) => (<li key={data.taskId} className="flex items-center justify-between px-4 py-2 bg-gray-100 w-300px mb-2 rounded-md shadow-md">
            <span>{data.tasksData}</span>
            <button onClick={() => handleDeleteTask(data.taskId)}>delete</button>
          </li>))}
        </ul>
    </section>
    </div>
  );
}
export default SelectedProjects;
