// 1. Using CONST because the array reference itself won't change
const taskList = [];

// 2. Using LET for a counter because the ID increments every time we add a task
let nextId = 1;

// Function to add a new task (Object) into our array
const addTask = (title) => {
    // Creating a task OBJECT
    const newTask = {
        id: nextId,
        title: title,
        isCompleted: false
    };
    
    taskList.push(newTask); // ARRAY method to add items
    nextId++; // Incrementing our LET variable
    console.log(`✅ Added: "${title}"`);
};

// Function to view all tasks
const viewTasks = () => {
    if (taskList.length === 0) {
        console.log("📭 Your task list is empty!");
        return;
    }
    
    console.log("\n--- YOUR TASK LIST ---");
    // Looping through the array of objects
    taskList.forEach(task => {
        const status = task.isCompleted ? "Status: Done" : "Status: Pending";
        console.log(`[ID: ${task.id}] ${task.title} | ${status}`);
    });
};

// Function to complete a task using an ARRAY method (.find)
const completeTask = (id) => {
    // Finding the specific OBJECT inside the array
    const foundTask = taskList.find(task => task.id === id);
    
    if (foundTask) {
        foundTask.isCompleted = true; // Modifying an object property
        console.log(`\n🎉 Task ID ${id} marked as completed!`);
    } else {
        console.log(`\n❌ Task with ID ${id} not found.`);
    }
};

// --- TEST DRIVE ---
addTask("Learn JavaScript variables");
addTask("Practice Array methods");
addTask("Build a mini project");

viewTasks(); // View them all

completeTask(2); // Complete the second task

viewTasks(); // View them again to see the updated status