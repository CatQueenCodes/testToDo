
//complete, name, priority, date, always want complete to be set to false automatically, id = project.length
const taskFactory = (taskName, priority, date) => {
    let completedStatus = false;
    let id = ' '
    return{completedStatus, taskName, priority, date, id} //id 
}

export {taskFactory}