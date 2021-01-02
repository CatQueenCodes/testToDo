/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mod_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mod/Task */ "./src/mod/Task.js");
/* harmony import */ var _mod_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mod/Project */ "./src/mod/Project.js");






/***/ }),

/***/ "./src/mod/Project.js":
/*!****************************!*\
  !*** ./src/mod/Project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => /* binding */ Project
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/mod/dom.js");




const projectContainer = document.getElementById('projectsHolder');

class Project {
    constructor(project, description) {
        this.project = project;
        this.description = description;
        this.id = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setId)();
        this.tasks = [];
    }

    render() {  
        //event listener for selecting specific projects
        const projectWrapper = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', this.id, 'project', null, projectContainer);

        const deleteButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', null, 'projectDeleteButton', 'X', projectWrapper);
        //event listener for deleting project

        const projectName = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, 'projectName', this.name, projectWrapper);
    }

    //render method for projects

    //render tasks in project
    
    //delete tasks     sets current task
    //edit tasks sets current task
}

let project1 = new Project('project1', 'this fucking project'); console.log(project1);
project1.render();



/***/ }),

/***/ "./src/mod/Task.js":
/*!*************************!*\
  !*** ./src/mod/Task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => /* binding */ Task
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/mod/dom.js");


//create task object and render task ability

const taskContainer = document.getElementById('tasksHolder');

class Task {
    constructor(name, description, priority, date){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.date = date;
        this.completedStatus = false;
        this.id = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setId)();
    }

    render() {
        const taskWrapper = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', this.id, 'task', null, taskContainer); 
        //event listener for click/edit?  //set specific task?

        const completeButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', null, 'taskCompleteButton', '✓', taskWrapper);
        //event listener for changing status?

        (this.completedStatus === false) ? completeButton.style.backgroundColor = '#EFEFEF' : completeButton.style.backgroundColor = 'rgb(115, 155, 96)';
        const taskName = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, 'taskNameDiv', this.name, taskWrapper);
        const taskPriority = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, 'taskPriorityDiv', this.priority, taskWrapper);
        const taskDate = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, 'taskDateDiv', this.date, taskWrapper);

        const deleteButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', null, 'taskDeleteButton', 'X', taskWrapper);
        //event listener for delete?
    }
}

let task1 = new Task('grace', 'description', 'high', 'date'); console.log(task1)
task1.render();


let selectedTask;

//method for when it is clicked set specific task

/***/ }),

/***/ "./src/mod/dom.js":
/*!************************!*\
  !*** ./src/mod/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setId": () => /* binding */ setId,
/* harmony export */   "createElement": () => /* binding */ createElement
/* harmony export */ });
//dom function for creating elements

function createElement(type, id, classList, info, parent) {
    const element = document.createElement(type);
    if(id) element.id = id;
    if(classList) element.classList.add(classList);
    if(info) element.textContent = info;
    if(parent) parent.appendChild(element);
    return element;
}

//function for setting IDs for projects or tasks

function setId () {
    return Math.random();
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map