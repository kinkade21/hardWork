"use strict";

// получение по AJAX запросу 
const getData = (url) => fetch(url)
    .then(response => response.json());

//.then(response => response.json())  // body в формат json
//.then(promise => promise.response);  // возвращаем полученный json

// отправка AJAX запроса
const sendData = ({ url, data = {} }) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json());  // сразу переводим в json()    
};


// после загрузки читаем файл posts.json
// при успешном скачивании - отправляем по адресу
document.addEventListener("DOMContentLoaded", () => {
    getData('posts.json')
        .then(data => sendData({
            url: 'https://jsonplaceholder.typicode.com/posts',
            data
        }));
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


