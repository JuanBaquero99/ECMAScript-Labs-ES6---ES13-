const anotherPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

anotherPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));