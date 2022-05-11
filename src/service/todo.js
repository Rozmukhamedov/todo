import { getTodoList } from "../api/todo/todo"

export const getTodo = () => {
    return getTodoList()
}


// export const deleteTodo = (id) => {
//     const newTodo = [...todo].filter((item) => item.id != id);
//     return newTodo;
// }

// export const statusTodo = (id) => {
//     const newTodo = [...todo].filter((item) => {
//         if (item.id == id) {
//             item.completed = !item.completed;
//         }
//         return item;
//     });
//     return newTodo
// }