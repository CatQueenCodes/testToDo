const projectFactory = (name, description) => {
    let tasks = [];
    let id = '';

    return{name, description, tasks, id}
}

export {projectFactory}