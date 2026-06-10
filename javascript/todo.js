console.log("JS is live")
let counter = 0;
const todoItemClassName = "todoItem";
const deleteBtnClassName = "todoDeleteBtn";
const todoDivElementClassName = "todoElement";

function addTodo(e){
    // e.preventDefault();
    const todoInputElement = document.getElementById("todo");
    const todoText = todoInputElement.value;

   const divElement = document.createElement("div");
   divElement.innerText = todoText;
   divElement.className = todoDivElementClassName;
   counter += 1;

   const formattedTodoId = "item-"+(counter);
   const deleteBtn = document.createElement("button");
   deleteBtn.className = deleteBtnClassName;
   const todoItems = document.getElementById("todos");
   const todoItemDivElement = document.createElement("div");

   todoItemDivElement.id = formattedTodoId;
   todoItemDivElement.className = todoItemClassName;
   todoItemDivElement.append(divElement);

   todoItems.append(todoItemDivElement);

   const todoToBeModified = document.getElementById(formattedTodoId);
   console.log(todoToBeModified)

   deleteBtn.innerText = "delete";
   deleteBtn.onclick = ()=> todoItems.removeChild(todoToBeModified)

   todoItemDivElement.append(deleteBtn)
    todoInputElement.value = ""

}