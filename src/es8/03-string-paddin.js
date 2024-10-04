const string = 'hello';
console.log(string.padStart(10, '12345')); // 1234512345hello
console.log(string.padEnd(10, '12345')); // hello1234512345

//Rellena el string con la cantidad de elementos que decidamos, en este caso 10, y con el string que le pasamos como segundo argumento, en este caso '12345'. Si el string es más largo que el número que le pasamos, lo corta.

