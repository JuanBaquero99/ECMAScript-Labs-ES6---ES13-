const promise1 = new Promise((resolve, reject) => reject("Rejected!"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

//Muestra la primera que cumpla con el objetivo de response o el que sea necesario. En este caso, el segundo