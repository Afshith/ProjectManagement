
import Button from "./Button"
import sideBar from "../assets/sidebarpic.png"
export default function ProjectSideBar({addProjectHandle,projectsData,onSelectProject}) {
  
   
  return (
    <aside className="w-1/4 max-w-xl px-12 py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-r-2xl font-sans">
        <div className="flex items-center mb-8">
  <img src={sideBar} alt="Sidebar Image" className="w-24 h-auto mr-4 rounded-lg shadow-lg" />
  <h1 className="italic uppercase text-xl text-white md:text-2xl">Your Projects</h1>
</div>
      <div>
      <Button onClick = {addProjectHandle}>+Add Projects</Button>
      </div>
      <ul className="mt-10">
       {
        projectsData.map((project) => {
          return(
            <li key={project.id}>{
              <button className="w-full px-2 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 shadow-lg transition-transform transform hover:scale-105"
              onClick = {() => onSelectProject(project.id)} >{project.title}</button>
             }</li>
          )
        }
        )
       }
      </ul>
    </aside>
  );
}