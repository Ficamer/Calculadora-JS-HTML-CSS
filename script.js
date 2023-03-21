const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent;

        if(boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1){ //Si al borrar el largo de la cadena dentro de pantalla es 1 (cuando estoy en la unidad), devuelvo 0.
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); //Devuelve la evaluacion del texto.
            } catch {
                pantalla.textContent = "No se puede operar"
            }
                return;
        }

        if (pantalla.textContent === "0") {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    })
})

/*Foreach es un metodo que recibe como parametro una funcion que se va 
a ejecutar una unica vez por cada elemento del arreglo, en este caso seria por
cada boton con la clase ".btn"

Usamos la simplificacion de function (funcion flecha) y le damos como parametro
boton(que este parametro va a ser cada boton pertenecientes a la clase botones)

Al parametro le asignamos el evento click y una funcion.

*/