import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectPage from "./components/NoProjectPage";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProjects from "./components/SelectedProjects";
//i use comments for my future references

function App() {
  //initially state's setProjectId is set to undefined because when its undefine no project component should diplay
  const[projectName,setProjectName] = useState({
    projects:[],
    setProjectId:undefined,
    tasks:[],
  });

  //when +add project is clicked it should set to null so newproject component will be  displayed
  

  function handleStartProject(){
    setProjectName((prevValue) => {
      return{
        ...prevValue,
        setProjectId:null,
      }   
    })  
  }
  //when cancel is clicked it should set back to undefined so NoProjectPage component will be  displayed
  function handleCancelProject(){
    setProjectName((prevValue) => {
      return{
        ...prevValue,
        setProjectId:undefined,
      }   
    })
  }
   //get a respected project with id
  function handleSelectedProject(id){
    setProjectName((prevValue) => {
      return{
        ...prevValue,
        setProjectId:id,
      }   
    })
  }
   //delete a respected project with id
  function handleDeleteProject(){
    setProjectName((prevValue) => {
      return{
        ...prevValue,
        projects:prevValue.projects.filter((project) => project.id !== prevValue.setProjectId),
        setProjectId:undefined,
      }   
    })
  }
  console.log(projectName);
  //main function which uses refs to connect to user input and get values and add to the project array in the state object

  function handleAddProject(projectsDetails){
    setProjectName((prevValue) => {
      const newProject = {
        ...projectsDetails,
        id:Math.random(),
        setProjectId:null,
      };
      return{
        ...prevValue,
        projects:[...prevValue.projects,newProject],
      }
    });
  } ;

  // function handleAddTask(taskDetails){
  //   setProjectName((prevValue) => {
  //     const newTask = {
  //       ...taskDetails,
  //       taskId: Math.random(),
  //       projectId: prevValue.setProjectId, // Access projectId directly
  //     };
  //     return {
  //       ...prevValue,
  //       tasks: [...prevValue.tasks, newTask],
  //     };
  //   });
  // }
  function handleAddTask(taskDetails){
    setProjectName((prevValue) => {
      const newTask = {
        tasksData: taskDetails,
        taskId:Math.random(),
        projectId:prevValue.selectedProject
      };
      return{
        ...prevValue,
        tasks: [newTask,...prevValue.tasks],
      } 
    });
  }
  function handleDeleteTask(id){
    setProjectName((prevValue) => {
      return{
        ...prevValue,
        tasks:prevValue.tasks.filter((task) => task.taskId !== id)

    }})
  }
  console.log(typeof handleDeleteProject);
  console.log(projectName.tasks.tasksData);
  const selectedProject = projectName.projects.find(project => project.id === projectName.setProjectId ) 
  let content  = <SelectedProjects project = {selectedProject} onDelete = {handleDeleteProject}  handleAddTask={handleAddTask} tasks = {projectName.tasks} handleDeleteTask = {handleDeleteTask}/>;
    if(projectName.setProjectId === null){
      content = <NewProject onAdd = {handleAddProject} onCancel = {handleCancelProject}/>
    }
    else if(projectName.setProjectId === undefined){
      content = <NoProjectPage addProjectHandle = {handleStartProject}/>
    }
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar addProjectHandle={handleStartProject} projectsData = {projectName.projects} onSelectProject = {handleSelectedProject}/> 
    {content}
   </main>
  );
}

export default App;
