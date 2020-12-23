
import {taskFactory, project} from './taskFactory'

//when you click add button it adds the task to the Project Array and uses the values in the task Factory.
function addTaskToProject() {
    event.preventDefault();
    let task = taskFactory(taskName.value, priority.value, date.value)
    project.push(task);
    taskForm.reset();
    taskForm.style.display = 'none';
    console.log(project)
    renderTask(task)
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


//render task in DOM
function renderTask(item){
    const app = document.getElementById('app');

    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'task';

    const completeButton = document.createElement('button');
    completeButton.className = 'taskCompleteBtn';
    completeButton.textContent = '✓';
    let status = item.completedStatus; console.log(status);
    completeButton.addEventListener('click', changeStatus)
    taskWrapper.appendChild(completeButton);

    const taskName = document.createElement('div');
    taskName.className = 'taskNameDiv';
    taskName.textContent =  item.taskName //way to add name in here
    taskWrapper.appendChild(taskName);

    const taskPriority = document.createElement('div');
    taskPriority.className = 'taskPriorityDiv';
    taskPriority.textContent =  item.priority //way to add name in here
    taskWrapper.appendChild(taskPriority);

    const taskDate = document.createElement('div');
    taskDate.className = 'taskDateDiv';
    taskDate.textContent =  item.date //way to add name in here
    taskWrapper.appendChild(taskDate);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'taskDeleteBtn';
    deleteButton.textContent = 'X';
    //need to add event listener
    taskWrapper.appendChild(deleteButton)

    app.append(taskWrapper)

    //change color of completed task
    function changeStatus(){   
        status = !status; console.log(status);
        (status === false) ? this.style.backgroundColor = 'pink' : this.style.backgroundColor = 'orange';
    }

    function deleteTask() {
        
    }
    //
}


export {addTaskToProject, hideTaskForm, displayTaskForm}