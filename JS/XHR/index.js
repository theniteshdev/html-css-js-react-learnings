const url = "https://jsonplaceholder.typicode.com/todos/1";

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();