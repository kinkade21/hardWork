const getData = (url) => {
    return fetch(url).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(
                `Отправка данных "${response.url}", завершилось ошибкой: "${response.status}: ${response.statusText}"`
            )
        }
    })
}

const sendData = (url, data = {}) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(
                `Отправка данных "${response.url}", завершилось ошибкой: "${response.status}: ${response.statusText}"`
            )
        }
    })
}

getData('db.json')
    .then((response) => sendData("https://jsonplaceholder.typicode.com/posts", response))
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// отправка методом XMLHttpRequest
// читаем файл для отправки
const sendDataXMLHR = ({ url, data = {} }) => {

    let xhr = new XMLHttpRequest();
    // настраиваем
    xhr.open("POST", url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // отправляем
    xhr.send(JSON.stringify(data));
};

getData('posts.json')
    .then(data => sendDataXMLHR({
        url: 'https://jsonplaceholder.typicode.com/posts',
        data
    }));


