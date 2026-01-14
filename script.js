// --- INITIAL STATE & DATA PERSISTENCE ---
let tasks = [];
let currentFilter = 'all';

// This runs as soon as the page loads
window.onload = () => {
    loadFromLocalStorage();
};

// --- DATA PERSISTENCE (LocalStorage) ---
function saveToLocalStorage() {
    try {
        localStorage.setItem('taskFlow_data', JSON.stringify(tasks));
    } catch (e) {
        console.error("Storage failed", e);
        alert("Error: Data could not be saved to browser storage.");
    }
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('taskFlow_data');
        if (saved) {
            tasks = JSON.parse(saved);
            renderTasks();
        }
    } catch (e) {
        console.error("Load failed", e);
        tasks = [];
    }
}

// --- CREATE (User Input Handling & Validation) ---
function addTask() {
    const nameInput = document.getElementById('taskName');
    const dateInput = document.getElementById('taskDate');
    const priorityInput = document.getElementById('taskPriority');

    // Validation: Ensures user doesn't submit empty data
    if (!nameInput.value.trim() || !dateInput.value) {
        alert("Validation Error: Please enter a task name and due date!");
        return;
    }

    const newTask = {
        id: Date.now(),
        name: nameInput.value.trim(),
        date: dateInput.value,
        priority: parseInt(priorityInput.value),
        completed: false
    };

    tasks.push(newTask);
    saveToLocalStorage(); // Persistence
    renderTasks();
    
    // Clear Input Fields
    nameInput.value = '';
    dateInput.value = '';
}

// --- READ / RENDER (Data Processing & Output Formatting) ---
function renderTasks() {
    const taskList = document.getElementById('taskList');
    const sortBy = document.getElementById('sortSelect').value;
    taskList.innerHTML = '';

    // 1. Filtering Logic (Processing)
    let displayTasks = tasks;
    if (currentFilter === 'high') {
        displayTasks = tasks.filter(t => t.priority === 3);
    } else if (currentFilter === 'completed') {
        displayTasks = tasks.filter(t => t.completed === true);
    }

    // 2. Sorting Logic (Calculations/Processing)
    displayTasks.sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
    });

    // 3. Loop and Output Formatting
    displayTasks.forEach(task => {
        const li = document.createElement('li');
        // Dynamic CSS classes for priority visualization
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div>
                <strong>${task.name}</strong> <br>
                <small>📅 Due: ${task.date}</small>
            </div>
            <div class="actions">
                <button onclick="toggleComplete(${task.id})" title="Toggle Complete">✔</button>
                <button onclick="editTask(${task.id})" title="Edit Task">✎</button>
                <button onclick="deleteTask(${task.id})" style="color: #ef4444;" title="Delete">✘</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// --- UPDATE (Functions for CRUD) ---
function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveToLocalStorage();
        renderTasks();
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    // Simple Error Handling for the edit prompt
    const newName = prompt("Edit Task Name:", task.name);
    if (newName !== null && newName.trim() !== "") {
        task.name = newName.trim();
        saveToLocalStorage();
        renderTasks();
    }
}

// --- DELETE ---
function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(t => t.id !== id);
        saveToLocalStorage();
        renderTasks();
    }
}

// --- FILTER CONTROL ---
function filterTasks(type, e) {
    currentFilter = type;
    // UI Feedback for buttons
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    if (e) e.currentTarget.classList.add('active');
    renderTasks();
}