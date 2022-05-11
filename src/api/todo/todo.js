import fetchAsync from "../../hooks/customFetch";

export const getTodoList = () => {
    const data = fetchAsync(`https://jsonplaceholder.typicode.com/todos`)
    console.log(data)
    return data;
}

