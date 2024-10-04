// arraqys destrcuturing

let fruit = ['manzana', 'pera', 'uva'];
let [fruta1, fruta2] = fruit;
console.log(fruta1, fruit[1]);

//Objetos destrcuturing

let user = { username: 'juan', age: 22 };
let { username, age } = user;
console.log(username, user.age); //Forma en la que podemos evocar el elemento


// Spread operator

let person = { 
    name: 'juan', 
    age: 22 
};
let country = { 
    country: 'mexico' 
};

let data = { ...person, country };
console.log(data);

//Una forma de unir dos objetos en uno solo

//rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum (1, 2, 3, 4, 5); //El primer valor es el que se asigna a num y los demas valores se asignan a values