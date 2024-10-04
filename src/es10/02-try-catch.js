try {
    hello();
} catch (error) {
    console.error(error);
}

try {
    anotherFn();
} catch {
    console.error('Esto es un error');
}