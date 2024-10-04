const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async Hello World!'), 3000)
            : reject(new Error('Error Async'))
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Another function');
}

console.log('Before');
anotherFn();
console.log('After');

//No bloquea la ejecución del código. Se ejecuta en paralelo.
//Ejecuta el before, luego el after y luego el another function. Ya que este tiene un timeout. De eso basa lo asincrono

