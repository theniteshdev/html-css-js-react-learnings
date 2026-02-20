console.log(window);
// console.log(window.atob("Hi"));

const input = document.querySelector("#input");

setTimeout(() => {
    input.focus();
}, 2000);

setTimeout(() => {
    input.blur();
}, 4000);
// setInterval(() => {
//     console.log("interval is running.")
// }, 4000);

// requestIdleCallback
let requestId = requestIdleCallback(() => {
    console.log("OK");
}); // this runs at when the event loop is empty
setTimeout(() => {
    if (requestId) {
        cancelIdleCallback(requestId);
        console.log("canceled");
    };

    // let confirm = window.confirm("Are, you sure you wants to close this window");
    // if (confirm) {
    //     window.close();
    // }
}, 1000)
console.log("Hmm");
console.log(`the callback request id: ${requestId}`);

// console.log(window.chrome.app);
// console.log(window.chrome.app.getDetails())

let gelo = window.clientInformation.geolocation.watchPosition((ps) => {
    console.log(ps)
});
let gelo2 = window.clientInformation.geolocation.getCurrentPosition((ps) => {
    console.log(ps)
});

console.log(gelo);

// window.addEventListener('beforeunload', function (e) {
//     // Cancel the default behavior to show a confirmation dialog
//     e.preventDefault();
//     // Set a value to trigger the dialog (browser may ignore custom text)
//     e.returnValue = 'h';
//     this.alert("Are, you sure you wants to exit this tab.")
// });

if (window.closed) {
    alert("Ok")
};

console.log(window.navigator.geolocation.getCurrentPosition((helllo) => {
    console.log(helllo)
}));

// location object
// console.log(location.assign("https://google.com"))

// history.back();
// let hist = history.pushState({}, "/login",);
// console.log("history setting", hist)

function Location() {
    console.log(history);
    history.forward("/script.js");
    // history.back("/script.js")
    history.go(-2);
};


