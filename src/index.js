
import {addTaskToProject, hideTaskForm, displayTaskForm} from './modules/taskHelpers'
import {hideProjectForm, displayProjectForm} from './modules/projectHelpers'
import {addProject} from './modules/projectHelpers'

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

