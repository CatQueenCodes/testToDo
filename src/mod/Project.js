
import {setId, createElement} from './dom';


const projectContainer = document.getElementById('projectsHolder');

export class Project {
    constructor(project, description) {
        this.project = project;
        this.description = description;
        this.id = setId();
        this.tasks = [];
    }

    render() {  
        //event listener for selecting specific projects
        const projectWrapper = createElement('div', this.id, 'project', null, projectContainer);

        const deleteButton = createElement('button', null, 'projectDeleteButton', 'X', projectWrapper);
        //event listener for deleting project

        const projectName = createElement('div', null, 'projectName', this.name, projectWrapper);
    }

    //render method for projects

    //render tasks in project
    
    //delete tasks     sets current task
    //edit tasks sets current task
}

let project1 = new Project('project1', 'this fucking project'); console.log(project1);
project1.render();

