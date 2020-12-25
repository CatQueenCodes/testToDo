import { allProjects } from '/src/index.js';

//for use in /addTaskToProject, tells it which project to add task to, set when project is clicked
let specificProject = ''; 

//render task in DOM + complete & delete functionality
function renderTask(item,project){
    const taskHolder = document.getElementById('tasksHolder');

    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'task';

    const completeButton = document.createElement('button');
    completeButton.className = 'taskCompleteBtn';
    completeButton.textContent = '✓';
    let status = item.completedStatus; 
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
    const taskHolder = document.getElementById('tasksHolder');

    const projectWrapper = document.createElement('div');
    projectWrapper.className = 'project';
    projectWrapper.addEventListener('click', displayProject); //renders current projects tasks

    const projectName = document.createElement('div');
    projectName.className = 'projectName';
    projectName.textContent = item.name;
    projectWrapper.appendChild(projectName);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'projectDeleteBtn';
    deleteButton.textContent = 'X';
    item.id = allProjects.indexOf(item);
    let index = item.id;
    deleteButton.addEventListener('click', deleteProject); 
    projectWrapper.appendChild(deleteButton);

    projectHolder.appendChild(projectWrapper);

    function deleteProject() {
        allProjects.splice(index, 1);
        projectHolder.innerHTML = '';
        allProjects.forEach(item => renderProject(item)); console.table(allProjects)
    }

    function displayProject(){
        specificProject = allProjects[index]; console.log(specificProject);
        name.textContent = item.name;
        description.textContent = item.description;
        taskHolder.innerHTML = '';
    }
}

export {renderTask, renderProject, specificProject}