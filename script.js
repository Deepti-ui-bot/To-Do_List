// script.js

// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add Task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');

  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskItem.appendChild(taskSpan);

  // Complete task on click
  taskSpan.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
});
