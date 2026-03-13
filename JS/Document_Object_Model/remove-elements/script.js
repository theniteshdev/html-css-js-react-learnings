// day-54

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

// delete p1;

setTimeout(() => {
    let wantsDelete = window.confirm("Are, you sure you wants to delete p1 ?");
    if (wantsDelete) {
        p1.remove();
    }
}, 2000)