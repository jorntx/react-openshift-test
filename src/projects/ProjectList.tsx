import {Project} from "./Project"
import  ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm";
import {useState} from 'react'

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void

}

function ProjectList({projects, onSave}: ProjectListProps) {
      const [projectBeingEdited, setProjectBeingEdited] = useState({});  
      const handleEdit = (project: Project) => {
         setProjectBeingEdited(project);
      }; 
      const cancelEditing = () => {
        setProjectBeingEdited({});
      }   

   return ( 
    <div className="row"> 
    { projects.map((project) => (
      <div key={project.id} className="col-sm">
          {project === projectBeingEdited ? (
          <ProjectForm project={project} onCancel={cancelEditing} onSave={onSave} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit}/>
          )}
       </div>
  ))}
    </div>    
   );
}  


export default ProjectList