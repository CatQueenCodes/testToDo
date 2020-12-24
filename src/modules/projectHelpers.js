import {projectFactory} from './projectFactory'
import {renderProject} from './DOM'


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
    console.log(project);
    hideProjectForm();
    renderProject(project);
}
export {hideProjectForm, displayProjectForm, addProject}