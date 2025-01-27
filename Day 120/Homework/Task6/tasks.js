let tasks = [];

function addTask(text) {
    const newTask = {
        text: text,
        completed: false
    }
    tasks.push(newTask);
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if(savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

export { tasks, addTask, toggleTask, removeTask, saveTasks, loadTasks}