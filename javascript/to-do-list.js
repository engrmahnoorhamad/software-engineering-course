// DOM Elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item (li)
    const li = document.createElement('li');

    // Create span for task text
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');
    
    // Toggle complete on click
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    // Remove item on click
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear input field
    todoInput.value = '';
    todoInput.focus();
}

// Event listeners
addBtn.addEventListener('click', addTask);

// Allow pressing 'Enter' to add task
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});