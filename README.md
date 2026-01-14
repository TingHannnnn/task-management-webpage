# 🚀 TaskFlow - Advanced Task Manager

### 🌐 [Click Here to View Live Website](https://tinghannnnn.github.io/task-management-webpage/)

## 📋 Project Overview
TaskFlow is a functional web application designed to help users organize tasks with priorities and due dates. This project demonstrates core programming concepts including CRUD operations, data persistence, and professional UI design.

## ✅ Key Requirements Demonstrated
* **User Input & Validation:** Prevents empty tasks and handles data via forms.
* **Data Processing:** Implements `.filter()` and `.sort()` for task organization.
* **Output Formatting:** Dynamic UI updates using Template Literals and CSS Flexbox.
* **Data Persistence:** Uses `localStorage` to save tasks even after browser refresh.
* **Error Handling:** Implements `try...catch` blocks and user confirmations.

## 🤖 AI Development Process (Documentation)
**AI Tool Used:** Gemini (Google)

### Prompts Used:
1. "Create a task management system with HTML, CSS, and JS using dark mode."
2. "Add filtering for high priority and sorting by date."
3. "Implement local storage and error handling for the task list."

### Modifications Made:
* Fixed the `filterTasks` function to pass the `event` object for better UI feedback.
* Manually adjusted CSS colors to create a "Glassmorphism" look.
* Added a custom `editTask` function using `prompt()` to simplify the update logic.

### Challenges & Solutions:
* **Challenge:** Files were initially saved as `.txt`, causing a 404 error on GitHub Pages.
* **Solution:** Renamed files to correct extensions (`.html`, `.js`) and re-pushed via Git.
* **Challenge:** Data lost on refresh. 
* **Solution:** Integrated `JSON.stringify` and `JSON.parse` with LocalStorage.

## 🛠️ Technique & Concepts
* **Arrays:** Centralized storage for all task objects.
* **Functions:** Modular code for Add, Edit, Delete, and Toggle actions.
* **DOM Manipulation:** Real-time updates to the HTML list without page reloads.

## 📂 Project Structure
* `index.html`: Structural layout and sidebar.
* `style.css`: Modern Dark Mode/UX styling.
* `script.js`: Application logic and data handling.