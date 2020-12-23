
import {addTaskToProject, hideTaskForm, displayTaskForm, renderTask} from './modules/taskHelpers'

//displays tasks when '+ Task' is clicked
const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', displayTaskForm) 

//add button for task form to submit tasks
const addButton = document.getElementById('taskDoneButton');
addButton.addEventListener('click', addTaskToProject);

//keeps form to submit tasks hidden until '+ Task' is clicked
hideTaskForm();

