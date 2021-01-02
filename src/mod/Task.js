import {setId, createElement} from './dom';

//create task object and render task ability

const taskContainer = document.getElementById('tasksHolder');

export class Task {
    constructor(name, description, priority, date){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.date = date;
        this.completedStatus = false;
        this.id = setId();
    }

    render() {
        const taskWrapper = createElement('div', this.id, 'task', null, taskContainer); 
        //event listener for click/edit?  //set specific task?

        const completeButton = createElement('button', null, 'taskCompleteButton', '✓', taskWrapper);
        //event listener for changing status?

        (this.completedStatus === false) ? completeButton.style.backgroundColor = '#EFEFEF' : completeButton.style.backgroundColor = 'rgb(115, 155, 96)';
        const taskName = createElement('div', null, 'taskNameDiv', this.name, taskWrapper);
        const taskPriority = createElement('div', null, 'taskPriorityDiv', this.priority, taskWrapper);
        const taskDate = createElement('div', null, 'taskDateDiv', this.date, taskWrapper);

        const deleteButton = createElement('button', null, 'taskDeleteButton', 'X', taskWrapper);
        //event listener for delete?
    }
}

let task1 = new Task('grace', 'description', 'high', 'date'); console.log(task1)
task1.render();


let selectedTask;

//method for when it is clicked set specific task