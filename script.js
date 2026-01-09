let tasks = [];
let currentFilter = 'all'; // Keep track of what we are currently viewing

function filterTasks(filterType) {
    currentFilter = filterType;
    
    // Update the UI to show which button is active
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // This finds the button you clicked and adds the 'active' style
    event.currentTarget.classList.add('active');
    
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Logic for filtering
    let filteredTasks = tasks;
    if (currentFilter === 'high') {
        filteredTasks = tasks.filter(t => t.priority === 3);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed === true);
    }

    // Loop through and display
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div>
                <strong>${task.name}</strong> <br>
                <small>${task.date}</small>
            </div>
            <div>
                <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
                <button onclick="deleteTask(${task.id})" style="color: #ef4444;">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Make sure your addTask and deleteTask functions call renderTasks() 
// at the end so the screen updates!