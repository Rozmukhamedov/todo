export default function customFetch(onLoad, url, options) {
    fetch(url, options)
        .then((res) => {
            res.json().then((data) => {
                onLoad(data)
            })
        })
};