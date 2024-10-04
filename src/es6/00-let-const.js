var lastName = 'Juan'; 
lastName = 'Perez'; // Reasignar valor
console.log(lastName); // Perez

let fruit = 'apple';
fruit = 'banana'; // Reasignar valor
console.log(fruit); // banana

const animal = 'dog';
animal = 'cat'; // Reasignar valor no se puede con const
console.log(animal); // Error: Assignment to constant variable.

const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; // var es global
        let fruit2 = 'banana'; // let es local
        const fruit3 = 'orange'; // const es local
    }
    console.log(fruit1); // apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();

//Las variables declaradas con let y const tienen un alcance de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declaran.