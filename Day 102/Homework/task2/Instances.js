// In JavaScript, synchronous programming means that tasks are executed one after the other, blocking the execution of subsequent code until the current task completes. This can lead to delays, especially with long-running tasks like network requests or heavy computations, as the entire program halts while waiting for the current task to finish.

// Synchronous Example

function synchronousTask() {
    console.log("Task 1 started");
    console.log("Task 1 completed");

    console.log("Task 2 started");
    console.log("Task 2 completed");
}

synchronousTask();
console.log("All tasks completed"); 

// Asynchronous Example

function asynchronousTask(callback) {
    console.log("Task 1 started");
    setTimeout(() => {
        console.log("Task 1 completed");
        callback(); 
    }, 2000); 
}
