import {projectFactory} from './projectFactory'
import {renderProject} from './DOM'
import { allProjects } from '/src/index.js'


function hideProjectForm() {
    const projectForm = document.getElementById('projectForm');
    projectForm.style.display = 'none';
}

function displayProjectForm() {
    projectForm.style.display = 'block';
}

function addProject() {
    event.preventDefault();
    let project = projectFactory(projectName.value, projectDescription.value)
    hideProjectForm();
    allProjects.push(project);
    projectForm.reset();
    renderProject(project);
    console.log('AllProject:', allProjects)
}
export {hideProjectForm, displayProjectForm, addProject}