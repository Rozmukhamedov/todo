import customFetch from "../../hooks/useCustomFetcher";

export const getTodo = (data) => {
    return customFetch(
        (response) => {
            data(response);
        },
        `https://jsonplaceholder.typicode.com/todos`,
        {}
    )
}