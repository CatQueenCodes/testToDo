
import {taskFactory, project} from './taskFactory'
import {renderTask} from './DOM'


//when you click add button it adds the task to the Project Array and uses the values in the task Factory.
function addTaskToProject() {
    event.preventDefault();
    let task = taskFactory(taskName.value, priority.value, date.value)
    project.push(task);
    taskForm.reset();
    taskForm.style.display = 'none';
    console.log(project)
    renderTask(task);
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


export {addTaskToProject, hideTaskForm, displayTaskForm}