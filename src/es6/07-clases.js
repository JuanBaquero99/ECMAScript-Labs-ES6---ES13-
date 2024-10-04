//Declarando
class User {};
//Haciendo una instancia de clase
//const newUser = new user();

class user {
    //metodos
    greeting() {
        return 'hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const gndx2 = new user();
console.log(gndx2.greeting());

//constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo Usario');
    }
    greeting() {
        return 'hello';
    }
}

const david = new user();

// this 

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const developer = new user('David', 23);
console.log(developer.uAge);
console.log(developer.uAge = 24);


//En la clase estamos definiendo unos métodos. Lo podemos asignar a una constante y hacer una instancia de la clase.
//En la instancia de la clase podemos llamar al método que definimos en la clase.
//La instancia se refiere a una variable que se basa en algún elemento de la clase.
//El constructor es un inicializador de eventos. Cuando se evoca el new user() se ejecuta el constructor.
