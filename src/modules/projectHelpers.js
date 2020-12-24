import {projectFactory} from './projectFactory'


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
}
export {hideProjectForm, displayProjectForm, addProject}