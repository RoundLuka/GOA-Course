type Task = {
    id: number;
    title: string;
    completed: boolean;
  };
  
  let tasks: Task[] = [];
  
  function addTask(title: string): void {
    const newTask: Task = { 
        id: tasks.length + 1, 
        title, 
        completed: false };
    tasks.push(newTask);
  }
  
  function removeTask(id: number): void {
    tasks = tasks.filter(task => task.id !== id);
  }
  
  function markComplete(id: number): void {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
    }
  }
  