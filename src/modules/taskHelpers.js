
import {taskFactory} from './taskFactory'
import {specificTask, renderTask, specificProject, specificComplete} from './DOM'
//import {setData} from '/src/index.js'

//when you click add button it adds the task to the Project Array and uses the values in the task Factory.
function addTaskToProject() {
    let task = taskFactory(nameTask.value, priority.value, date.value)
    let project = specificProject.tasks;
    let taskholder = document.getElementById('tasksHolder');

   
    if(this.innerHTML == 'Add') {
        event.preventDefault();
        task = taskFactory(nameTask.value, priority.value, date.value)
        task.taskDescription = taskDescription.value;
        project.push(task);
        taskForm.reset();
        hideTaskForm();
        renderTask(task);
        console.log('This Projects Task', specificProject.tasks)
    }else if(this.innerHTML == 'Update'){
        event.preventDefault();
        task = taskFactory(nameTask.value, priority.value, date.value)
        task.taskDescription = taskDescription.value;
        task.completedStatus = specificComplete;console.log(specificTask) //idk if I need this  
        project.splice(specificTask, 1, task); console.log(task.id); console.log(task)
        taskholder.innerHTML = '';
        specificProject.tasks.forEach(task => {renderTask(task)}); 
        console.log('This Projects Task', specificProject.tasks)
        hideTaskForm();
        this.innerHTML = 'Add';
        taskForm.reset();
    }
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

// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 object in ff