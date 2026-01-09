# 🚀 TaskFlow - Modern Task Management System

A sleek, professional, and high-performance task management dashboard built with vanilla web technologies. This project was designed with a **"Dark Mode Glassmorphism"** aesthetic for a modern user experience.

## ✨ Features

* **Full CRUD Operations:** Add, view, edit, and delete tasks seamlessly.
* **Priority System:** Visual indicators (Red/Orange/Green) for High, Medium, and Low priorities.
* **Advanced Filtering:** Filter tasks instantly by "High Priority" or "Completed" status.
* **Smart Sorting:** Organize your list by Due Date or Priority level.
* **Mark as Complete:** Toggle tasks as finished with a visual strike-through effect.

## 🛠️ Technique Used

* **HTML5:** Used semantic tags (`<aside>`, `<main>`) for better structure.
* **CSS3:** Implemented **Glassmorphism**, Custom Variables, and Flexbox for a modern UI.
* **JavaScript (ES6+):** * **Arrays:** Used for data storage.
    * **Higher-Order Functions:** Used `.filter()` for tabs and `.sort()` for organization.
    * **DOM Manipulation:** Used to dynamically update the list without refreshing the page.

## 🚀 How to Use

1.  **Add a Task:** Enter the task name, select a date and priority, then click "+ Add Task".
2.  **Edit/Delete:** Use the pencil icon (✎) to rename a task or the red X (✘) to remove it.
3.  **Filter:** Click the sidebar buttons to switch between viewing all tasks or specific categories.
4.  **Sort:** Use the dropdown menu at the top right to change the order of your tasks.

## 📂 Project Structure

```text
task-management-webpage/
├── index.html    # Layout and Sidebar structure
├── style.css     # Dark mode, Glassmorphism & Priority colors
├── script.js    # CRUD logic, Filtering, and Sorting functions
└── README.md     # Project documentation