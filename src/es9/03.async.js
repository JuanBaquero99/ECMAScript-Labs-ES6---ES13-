async function* anotherGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value)); // { value: 1, done: false }
other.next().then(response => console.log(response.value)); // { value: 2, done: false }
other.next().then(response => console.log(response.value)); // { value: 3, done: false }
console.log('hello'); // hello

