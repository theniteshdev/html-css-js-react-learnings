const todo = {
    todos: [],
    totalCompleted: 0,
    removeTodo(id) {
        todos = todos.filter(item => item.id !== id);
    },
    newTodo(todoObj) {
        todos.push(todoObj);
    },
};

const user1todo = todo;
// this is object oriented programming