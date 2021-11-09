"use strict";

let numeros = [];
let interruptor = true;
const init = () => {
    //nodos
    let form = document.querySelector(".form-floating");
    let input = document.querySelector("#floatingInputValue");
    let output = document.querySelector(".salida"); //segunda etiqueta article

    let btnBorrar = document.querySelector(".btn-secondary")

    let warning = document.querySelector(".alert-warning")
    let ul = null;




    //funciones
    const crearUl = () => {
        ul = document.createElement("ul");
        ul.className = "lista";
        output.appendChild(ul);
    }

    const crearLi = valor => {
        const li = document.createElement("li");
        li.innerHTML = valor;
        ul.appendChild(li);
    }

    const deleteLi = (e) => {
        // console.log(e.target);
        numeros = [];
        warning.innerHTML = `Array[${numeros}`;


        if (ul!== null) {
            ul.innerHTML = "";
        }


    }

    form.addEventListener(
        "submit",
        ev => {
            ev.preventDefault();
            const number = Number(input.value);

            numeros.push(number);

            if (interruptor === true) {
                interruptor = false; //Solo se ejecuta la primera vez porque aqui le estamos dando valor "falso" y ya no vuelve para arriba
                crearUl();

            }
            crearLi(input.value);
            warning.innerHTML = `Array[${numeros}`;
        }
    );
    btnBorrar.addEventListener(
        "click",
        deleteLi);


};




















//El elemento load se ejecuta cuando toda la pagina ha terminado de cargar
window.addEventListener(
    "load",
    init
);
