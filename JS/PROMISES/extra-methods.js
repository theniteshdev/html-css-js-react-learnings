const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolve from pr1.")
    }, 2200);
});
const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolve from pr2.")
    }, 3000);
});
const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolve from pr3.")
    }, 2100);
});

const race = Promise.race([promise1, promise2, promise3]);
race.then((data) => {
    console.log(data)
})
.catch((reason)=>{
    console.log(reason);
})
.finally(()=>{
    console.log("end!!")
});

const tryMethod = Promise.allSettled([promise1, promise2, promise3]);

tryMethod.then((data)=>{
    console.log(data);
})
tryMethod.catch((errror)=>{
    console.log(errror);
})

