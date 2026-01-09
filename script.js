// ADD TASK
function addTask() {
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = parseInt(document.getElementById('taskPriority').value);

    if (!name || !date) return alert("Fill in all fields!");

    const newTask = {
        id: Date.now(), // Unique ID
        name: name,
        date: date,
        priority: priority,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    
    // Clear the inputs
    document.getElementById('taskName').value = '';
    document.getElementById('taskDate').value = '';
}

// DELETE TASK
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// TOGGLE COMPLETE
function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
    }
    renderTasks();
}