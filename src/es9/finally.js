const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false)
            resolve('Hey!');
        else
            reject('Ups!');
    });
}

anotherFunction()
.then(response => console.log(response))
.catch(error => console.error(error))
.finally(() => console.log('Finalizó')); // finally() se ejecuta siempre, sin importar si la promesa fue resuelta o rechazada

//La muestra de un mensaje en consola mostrando que la ejecución ya termino