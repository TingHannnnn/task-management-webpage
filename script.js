let tasks = [];

function addTask() {
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;

    if (!name || !date) return alert("Please fill in all fields");

    const newTask = {
        id: Date.now(),
        name,
        date,
        priority: parseInt(priority),
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    clearInputs();
}

function renderTasks(filter = 'all') {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    let filteredTasks = tasks;
    if (filter === 'high') filteredTasks = tasks.filter(t => t.priority === 3);
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div>
                <strong>${task.name}</strong> <br>
                <small>${task.date}</small>
            </div>
            <div>
                <button onclick="toggleComplete(${task.id})">Done</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    renderTasks();
}

function clearInputs() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskDate').value = '';
}

// Initial render
renderTasks();