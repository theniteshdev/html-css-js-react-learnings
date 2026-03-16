// day-57

document.addEventListener("keypress", function(event){
    console.log(event.code)
    console.log(event.key)
    // console.log(event.value); 
});

/*
    -> types of keyboard events- keypress, keydown ....

    -> to capture keyboard event, focus on mouse must be in our browser window (document) otherwise it will not works

    -> All keys have its key-code.
    to get its key typed value we have to get event.key to get value

    -> We can add keyboard event on any element but element must be able to focus, so that it able to capture
*/
