import inquirer from "inquirer";
let todos = [];
let addTask;
do {
    addTask = await inquirer.prompt({
        name: "task",
        type: "confirm",
        message: "Do you want to add any task?",
    });
    if (addTask.task) {
        let doTask = await inquirer.prompt({
            name: "taskToAdd",
            type: "input",
            message: "Please type your task here:",
        });
        todos.push(doTask.taskToAdd);
    }
    else {
        let addTask;
        do {
            addTask = await inquirer.prompt({
                name: "delete",
                type: "confirm",
                message: "Do you want to delete your task?",
            });
            if (addTask.delete) {
                let deleteQues = await inquirer.prompt({
                    type: "list",
                    choices: todos,
                    message: "Select any task to delete:",
                    name: "deleteTask"
                });
                if (todos.includes(deleteQues.deleteTask)) {
                    let i = todos.indexOf(deleteQues.deleteTask);
                    todos.splice(i, 1);
                    console.log("Your task has been deleted.");
                }
            }
        } while (addTask.delete);
    }
    console.log("Here is your todo list:");
    for (let todo of todos) {
        console.log(todo);
    }
} while (addTask.task);
