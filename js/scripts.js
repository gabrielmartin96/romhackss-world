/* const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const hacks = [
    { nombre: "advancedAdventure", hackOf: "fireRed" },
    { nombre: "cawps", hackOf: "emerald" },
    { nombre: "clover", hackOf: "fireRed" },
    { nombre: "darkRising", hackOf: "fireRed" },

]

const filtrar = () => {
    // console.log(formulario.value)
    resultados.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for (let hack of hacks) {
        let nombre = hack.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultados.innerHTML +=
                `<li>${hack.nombre}</li>`
        }
    }

    if (resultados.innerHTML === ''){`
        <li>Rom not found</li>`
    }
}

//boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

filtrar(); */