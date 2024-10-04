const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
})

//La funcion import() devuelve una promesa que se resuelve con el modulo importado.
//El modulo importado se puede usar como cualquier otro modulo
//En el HTML se debe agregar el atributo type="module" en la etiqueta script para que funcione
//Y es escuchado por el evento click del boton
//Al dar click en el boton, se importa el modulo y se muestra en consola el modulo importado
//Y se ejecuta la funcion hello() del modulo importado
