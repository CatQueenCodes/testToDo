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

setId();

export {setId, createElement}