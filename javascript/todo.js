console.log("JS is live")
let counter = 0;
const addTodoBtn = document.getElementById("form-submission-btn");

const todoItemClassName = "todoItem";
const deleteBtnClassName = "todoDeleteBtn";
const todoDivElementClassName = "todoElement";
const editBtnClassName = "todoEditBtn";
const buttonsContainerClassName = "btnContainer";
const hideElementClassName = "hide-element";

function addTodo() {

    const todoInputElement = document.getElementById("todo");
    const todoText = todoInputElement.value;

    if(!todoText) return alert("There must be a value inside the input field")

    const divElement = document.createElement("div"); // <div></div>
    divElement.innerText = todoText; // <div>{todoText}</div>
    divElement.className = todoDivElementClassName; // <div class="todoElement">{todoText}</div>
    counter += 1;

    // unique id
    const formattedTodoId = "item-" + (counter);


    // delete button
    const deleteBtn = document.createElement("button");// <button></button>
    deleteBtn.className = deleteBtnClassName; //  <button class="todoDeleteBtn"></button>
    deleteBtn.innerText = "Delete"; // <button class="todoDeleteBtn">Delete</button>

    // edit button
    const editBtn = document.createElement("button");// <button></button>
    editBtn.className = editBtnClassName; //  <button class="todoEditBtn"></button>
    editBtn.innerText = "Edit"; // <button class="todoEditBtn">Edit</button>
    
    const todoItems = document.getElementById("todos");
    const todoItemDivElement = document.createElement("div"); // <div></div>
    
    todoItemDivElement.id = formattedTodoId; // <div id="item-{counter}"></div>
    todoItemDivElement.className = todoItemClassName; // <div id="item-{counter}" class="todoItem"></div>
    todoItemDivElement.append(divElement);// <div id="item-{counter}" class="todoItem"><div class="todoElement">{todoText}</div></div>

    const buttonsContainer = document.createElement("div"); // <div></div>
    buttonsContainer.className = buttonsContainerClassName; // <div class="btnContainer"></div>
    buttonsContainer.append(deleteBtn) // <div class="btnContainer"><button class="todoDeleteBtn">Delete</button></div>
    buttonsContainer.append(editBtn) // <div class="btnContainer"><button class="todoDeleteBtn">Delete</button> <button class="todoEditBtn">Edit</button></div>

    todoItemDivElement.append(buttonsContainer) // <div id="item-{counter}" class="todoItem"><div class="todoElement">{todoText}</div><div class="btnContainer"><button class="todoDeleteBtn">Delete</button> <button class="todoEditBtn">Edit</button></div></div>
    
    todoItems.append(todoItemDivElement);
    /*    <div id="todos">
    <div id="item-{counter}" class="todoItem">
        <div id="item-{counter}" class="todoItem">
            <div class="todoElement">{todoText}</div>
           <div class="btnContainer">
            <button class="todoDeleteBtn">Delete</button>
            <button class="todoEditBtn">Edit</button>
           </div>
       </div>
    </div> 
    */
   
   const todoToBeModified = document.getElementById(formattedTodoId);
   deleteBtn.onclick = () => todoItems.removeChild(todoToBeModified);
    console.log(todoToBeModified);

   editBtn.onclick = () => { // || OR, ! NOT, && AND
       addTodoBtn.className = hideElementClassName;
      const todoForm = document.getElementById("todo-form");

      if(!document.getElementById("update-todo-btn")){
        const updateButton = document.createElement("button");
      updateButton.id = "update-todo-btn"
      updateButton.innerText = "Update Todo";
      updateButton.onclick = ()=> updateTodo(formattedTodoId)
      todoForm.append(updateButton)
    }
   }

    todoInputElement.value = "" // empty input field
}

function updateTodo(id){
    addTodoBtn.classList.remove(hideElementClassName)
    const todoInputElement = document.getElementById("todo");
    const updatedTodoText = todoInputElement.value;

    console.warn(id)
    const divElementToBeModified = document.getElementById(id);
    divElementToBeModified.firstChild.textContent = updatedTodoText;

    document.getElementById("update-todo-btn").remove()
    todoInputElement.value = "" // empty input field
}