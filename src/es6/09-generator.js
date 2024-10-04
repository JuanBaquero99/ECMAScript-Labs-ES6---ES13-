function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['a', 'b', 'c']);
console.log(it.next().value); // a

//Permite que o código seja executado de forma assíncrona y avanza en el tiempo