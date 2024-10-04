import fetch from 'node-fetch';

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const data = await response.json();

export { data };

//Esto permite que se pueda exportar la información de la API de manera más sencilla y rápida
//Evitando usar el método then() y catch() para obtener la información de la API o async y await