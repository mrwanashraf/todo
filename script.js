let todoList = document.querySelector("ul"); // getting the current list of todos.
let todo = document.querySelector("#todo"); // getting the todo textbox.
let button = todo.nextSibling.nextSibling; // getting the todo button.
let currentElement = null; // keeping track of which element is being selected.
let input = document.querySelector("#input");

document.addEventListener("click", function buttonClicked(e) {
    let li = e.target.parentNode;

    switch(true) {
        // add element.
        case e.target.classList.contains("fa-plus-circle"):
            addTodo();
        break;

        // edit element.
        case e.target.classList.contains("fa-edit"):
            editTodo(e);
        break;

        // remove element.
        case e.target.classList.contains("fa-minus-circle"):
            removeTodo(li);
        break;

        // select element.
        case e.target.classList.contains("fa-circle"):
            selectTodo(li,e);
        break;

        // check element.
        case e.target.classList.contains("fa-check"):
            checkTodo(e);
        break;

        // remove all elements.
        case e.target.classList.contains("fa-trash-alt"):
            removeTodos(e);
        break;
    }    
    
});

// use enter to add a new item or finish editing an existing one.
document.addEventListener("keydown", function keyPressed(e) {
    switch(true) {
        case e.keyCode === 13 && button.classList.contains("fa-plus-circle"):
            addTodo();
        break;

        case e.keyCode === 13 && button.classList.contains("fa-edit"):
            editTodo(e);
        break;
    }   
});



// functions

// take the value from the input field and push it to todoList.
function addTodo() {
    if (todo.value.length > 0) {
        todoList.innerHTML += `<li><i class="far fa-circle"></i><span>${todo.value.trim()}</span><i class="fas fa-check"></i><i class="fas fa-minus-circle"></i></li>`;
        todo.value = null;
    }
}

// remove selected list from todoList
function removeTodo(li) {
    todoList.removeChild(li);
}

// copy the value from the selected list to the input field
function selectTodo(li) {
    let currentValue = li.querySelector('span').innerText;

    todo.value = currentValue;
 
    button.classList.remove("fa-plus-circle");
    button.classList.add("fa-edit");

    if ( todo.classList.contains("fa-plus-circle") ) {
        todo.value = null;
    }

    currentElement = li.querySelector('span');

    todo.focus();

}

// change the selected list value to the current value in the input field
function editTodo() {

    if ( todo.value.length > 0) {
        currentElement.innerText = todo.value;    
    }

    button.classList.toggle("fa-edit");
    button.classList.toggle("fa-plus-circle");
    todo.value = null;
    currentElement = null;
    todo.blur();
}

// toggle the selected list to bechecked or not
function checkTodo(e) {
    let p = e.target.previousSibling;
    p.classList.toggle("strike");
}
