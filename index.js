// Arrays to keep track of each task's state //deleted
// const taskTitles = []
// const taskComplete = []

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: () => {
    // Print the state of a task to the console in a nice readable way
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    completed: () => {
      this.complete = true;
    }
  };
  return task;
}





// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`



// DRIVER CODE BELOW
const task1 = newTask("Take moose for a walk and a 💩", "pick up his shits");
const task2 = newTask("Go eat some ass", "😩");
const tasks = [task1, task2];


task1.logState();                    // Clean Cat Litter has not been completed
task1.completed();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
