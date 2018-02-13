var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");

// though this way wi work it is long and hard to read
// while (input !== "quit") {
//     // handle input
//     if (input === "list") {
//         todos.forEach(function(todo, i){
//             console.log("**********");
//             console.log(i + ": " + todo);
//             console.log("**********");
//         });
//         console.log(todos);
//     } else if (input === "new") {
//         // ask for new todo
//         var newTodo = prompt("Enter new todo");
//         // add to todo array
//         todos.push(newTodo);
//         console.log("Added todo.");
//     } else if (input === "delete") {
//         // ask for index of todo to be deleted
//         var index = prompt("Enter the index of todo to delete");
//         // delete that todo
//         // splice()
//         todos.splice(index, 1) 
//         /* index -> where to make the cut in this case the number the user types */ 
//         /*1 -> how many items we want to delete following that index*/
//         console.log("Deleted todo.");
//     }
//     // ask again for new input
//     input = prompt("What would you like to do?");
// }
// console.log("OK, you quit the app.")

/*this method will keep our loop short and easy to read by breaking things into functions*/

while (input !== "quit") {
    // handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    // ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app.")

// functions for the loop

// lists each todo list item individually with its index number
function listTodos() {
    todos.forEach(function (todo, i) {
        console.log("**********");
        console.log(i + ": " + todo);
        console.log("**********");
    });
    console.log(todos);
}

// adds a todo to the index
function addTodo() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todo array
    todos.push(newTodo);
    console.log("Added todo.");
}

// deletes a specific todo from the list
function deleteTodo() {
    // ask for index of todo to be deleted
    var index = prompt("Enter the index of todo to delete");
    // delete that todo
    // splice()
    todos.splice(index, 1)
    /* index -> where to make the cut in this case the number the user types */
    /*1 -> how many items we want to delete following that index*/
    console.log("Deleted todo.");
}