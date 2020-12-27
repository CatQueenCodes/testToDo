
//complete, name, priority, date, always want complete to be set to false automatically, id = project.length
const taskFactory = (nameTask, priority, date) => {
    let completedStatus = false;
    let id = ' ';
    
    return{completedStatus, nameTask, priority, date, id}
}

export {taskFactory}