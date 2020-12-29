
import {addTaskToProject, hideTaskForm, displayTaskForm, hideAddTaskButton} from './modules/taskHelpers'
import {hideProjectForm, displayProjectForm, addProject} from './modules/projectHelpers'
import { renderProject } from './modules/DOM';

//holds app projects
let allProjects = []; 

//display form when '+ Project' clicked
const addProjectButton = document.getElementById('addProject');
addProjectButton.addEventListener('click', displayProjectForm)

//submit project button 
const submitProjectButton = document.getElementById('projectSubmit');
submitProjectButton.addEventListener('click', addProject)

//displays tasks when '+ Task' is clicked
const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', displayTaskForm) 

//submit task button
const submitTaskButton = document.getElementById('taskSubmit');
submitTaskButton.addEventListener('click', addTaskToProject);


//keeps form to submit tasks and projects hidden until '+ Task' is clicked
hideTaskForm();
hideProjectForm();

//keeps add task button hidden
hideAddTaskButton();


// Local Storage functions
function setData() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

function getData(){
    if(!localStorage.allProjects){
        setData();
    }else{
        let project = localStorage.getItem('allProjects');
        project = JSON.parse(project);
        allProjects = project;
        allProjects.forEach(project => { renderProject(project)});
    }
}

getData();

export {allProjects, setData}

// {name: 'Default Project', description: 'This is the default project', tasks:[{taskName: 'Default Task', priority: 'Medium', date: 10/10/10, completedStatus: false, id: 0}], id:0}