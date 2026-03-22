// sync code example

console.log("Sync 1");

if (true) {
    console.log("Sync 2")
};

const a = 45;
console.log('sync 3');

// async code
setTimeout((a, b) => {
    console.log(a, b);
}, 1000, 'a', 'b');
// showing data
const userid = document.querySelector(".userid");
const id = document.querySelector(".id");
const title = document.querySelector(".title");
const completed = document.querySelector(".completed");

const showBtn = document.querySelector("button");
showBtn.addEventListener("click", showData);

function showData() {
    function setReponseToDom(userIdRes, idRes, titleRes, completedRes) {
        userid.innerHTML = userIdRes;
        id.innerHTML = idRes;
        title.innerHTML = titleRes;
        completed.innerHTML = completedRes;
    };
    let resWait = "wait..";
    setReponseToDom(resWait, resWait, resWait, resWait);
    let resFailed = "failed !!";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.send();
    xhr.addEventListener("load", function (event) {
        if (xhr.status == 200) {
            const { userId: uid, id: ids, title: ti, completed: com } = JSON.parse(xhr.response);
            setReponseToDom(uid, ids, ti, com);
        } else {
            setReponseToDom(resFailed, resFailed, resFailed, resFailed);
        }
    });
    xhr.onerror = function () {
        setReponseToDom(resFailed, resFailed, resFailed, resFailed)
    };
};