const newElement = document.createElement("h1");
newElement.setAttribute("title", "this is title");
newElement.innerHTML = "Coming from Javascript";
document.body.appendChild(newElement);

console.dir(newElement);

newElement.innerHTML = "Modified text by javascript";
newElement.style.color = "red"; // changing style
newElement.style.fontFamily = "Arial"; // changing font family

// creating elements


for (let i = 1; i <= 10; i += 2) {
    // console.log(i);
    const ele = document.createElement("div");
    ele.style.backgroundColor = "cyan";
    ele.style.color = "red";
    ele.style.padding = "18px";
    ele.style.margin = "4px";
    ele.style.maxWidth = "300px";
    ele.innerHTML = i;
    document.body.appendChild(ele);
};

// creating an image element
const thumbnail = document.createElement('img');
thumbnail.src = "./thumbnail.png";
thumbnail.style.maxWidth = "60%";
thumbnail.alt = "thumbnail-image";
thumbnail.title = "learn in depth";
document.body.appendChild(thumbnail);
