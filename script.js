let tasks = [];
let currentFilter = 'all';

// --- CREATE ---
function addTask() {
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = parseInt(document.getElementById('taskPriority').value);

    if (!name || !date) return alert("Please fill in all fields");

    const newTask = {
        id: Date.now(),
        name,
        date,
        priority,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    document.getElementById('taskName').value = '';
}

// --- READ / RENDER (Includes Filtering & Sorting) ---
function renderTasks() {
    const taskList = document.getElementById('taskList');
    const sortBy = document.getElementById('sortSelect').value;
    taskList.innerHTML = '';

    // 1. Filter Logic
    let displayTasks = tasks;
    if (currentFilter === 'high') displayTasks = tasks.filter(t => t.priority === 3);
    if (currentFilter === 'completed') displayTasks = tasks.filter(t => t.completed);

    // 2. Sort Logic
    displayTasks.sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
    });

    // 3. Loop for Rendering
    displayTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div>
                <strong>${task.name}</strong> <br>
                <small>Due: ${task.date}</small>
            </div>
            <div class="actions">
                <button onclick="toggleComplete(${task.id})">✔</button>
                <button onclick="editTask(${task.id})">✎</button>
                <button onclick="deleteTask(${task.id})" style="color: #ef4444;">✘</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// --- UPDATE (Edit & Mark Complete) ---
function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newName = prompt("Edit Task Name:", task.name);
    if (newName) {
        task.name = newName;
        renderTasks();
    }
}

// --- DELETE ---
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// --- FILTER CONTROL ---
function filterTasks(type, e) {
    currentFilter = type;
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    renderTasks();
}

// Initial Call
renderTasks();