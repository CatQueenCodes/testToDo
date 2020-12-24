import {project} from './taskFactory'

//render task in DOM + complete & delete functionality
function renderTask(item){
    const taskHolder = document.getElementById('tasksHolder');

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
    taskName.textContent =  item.taskName 
    taskWrapper.appendChild(taskName);

    const taskPriority = document.createElement('div');
    taskPriority.className = 'taskPriorityDiv';
    taskPriority.textContent =  item.priority 
    taskWrapper.appendChild(taskPriority);

    const taskDate = document.createElement('div');
    taskDate.className = 'taskDateDiv';
    taskDate.textContent =  item.date 
    taskWrapper.appendChild(taskDate);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'taskDeleteBtn';
    deleteButton.textContent = 'X';
    item.id = project.indexOf(item);
    let index = item.id; 
    deleteButton.addEventListener('click', deleteTask)
    taskWrapper.appendChild(deleteButton)

    taskHolder.append(taskWrapper)

    //delete task from project array
    function deleteTask() {
       project.splice(index,1); 
       taskHolder.innerHTML =' ';
       project.forEach(item => {renderTask(item)}); console.table(project)
    }

    //change color of completed task
    function changeStatus(){   
        status = !status; console.log(status);
        (status === false) ? this.style.backgroundColor = 'transparent' : this.style.backgroundColor = 'rgb(115, 155, 96)';
    }
}

//going to need to render tasks in here too when it is clicked

// render PROJECT and give project functionality
function renderProject(item){
    const projectHolder = document.getElementById('projectsHolder');
    const name = document.getElementById('Name')
    const description = document.getElementById('Description')

    const projectWrapper = document.createElement('div');
    projectWrapper.className = 'project';

    const projectName = document.createElement('div');
    projectName.className = 'projectName';
    projectName.textContent = item.name;
    projectWrapper.appendChild(projectName);

    name.textContent = item.name;
    description.textContent = item.description;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'projectDeleteBtn';
    deleteButton.textContent = 'X';
    //add event listener
    projectWrapper.appendChild(deleteButton);

    projectHolder.appendChild(projectWrapper);
}

export {renderTask, renderProject}