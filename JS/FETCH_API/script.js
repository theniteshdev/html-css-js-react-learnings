console.log("Running Fine");

const header = {

}

const response = fetch("https://dummyjson.com/products", header);
response.then((data) => {
    data.json().then((b) => {
        console.log(b);
    });
});