
import {taskFactory} from './taskFactory'
import {renderTask, specificProject} from './DOM'


//when you click add button it adds the task to the Project Array and uses the values in the task Factory.
function addTaskToProject() {
    event.preventDefault();
    let task = taskFactory(taskName.value, priority.value, date.value)
    let project = specificProject.tasks;
    project.push(task);
    taskForm.reset();
    taskForm.style.display = 'none';
    renderTask(task);
    console.log('This Projects Task', specificProject.tasks)
}

//set so form is hidden till clicked 
function hideTaskForm(){
    const taskForm = document.getElementById('taskForm');
    taskForm.style.display = 'none';
}

//display task form
function displayTaskForm() {
    taskForm.style.display = 'block';
}

function hideAddTaskButton() {
    const addTask = document.getElementById('addTask');
    addTask.style.display = 'none';
}

function displayAddTaskButton() {
    const addTask = document.getElementById('addTask');
    addTask.style.display = 'block';
}


export {addTaskToProject, hideTaskForm, displayTaskForm, hideAddTaskButton, displayAddTaskButton}