export default async function fetchAsync(url) {

    let response = await fetch(url);
    let data = await response.json()
    console.log(data)
    return data;
}