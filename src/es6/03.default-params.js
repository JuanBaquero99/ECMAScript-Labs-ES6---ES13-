function newUser(name, age, country ) {
    var name = name || 'default name';
    var age = age || 0;
    var country = country || 'default country';
    console.log(name, age, country);
}

newUser();
newUser('Juan', 22, 'Mexico');

// Default params

function newUser2(name = 'default name', age = 0, country = 'default country') {
    console.log(name, age, country);
}
//Una forma más eficiente de asignación con el nuevo ECMAS

newUser2();
newUser2('Juan', 22, 'Mexico');