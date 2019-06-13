//Advance version of loops in ES5
var todos=[
    "Clean room",
    "iron clothes",
    "pack te Bag",
    "not forget the lunch",
    "this is it"
];
var todolen=todo.length;
//_________________ type 1

// todo.forEach(function(todo,i){
//     console.log(todo,i);
// })

//_________________type 2

function logTodos(todo,i){
    console.log(todo,i);
}
todos.forEach(logTodos);