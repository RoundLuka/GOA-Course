import { tasks, addTask, toggleTask, removeTask, saveTasks, loadTasks } from "./tasks.js";

loadTasks();

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("AddTaskButton");
const tasksList = document.getElementById("tasksList");

function renderTasks() {
    tasksList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            toggleTask(index);
            saveTasks();
            renderTasks();
        });

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            removeTask(index);
            saveTasks();
            renderTasks();
        });

        li.appendChild(taskText);
        li.appendChild(checkbox);
        li.appendChild(deleteButton);

        tasksList.appendChild(li);
    })

    
}

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText)
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
});

renderTasks();