let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

console.log(numeroAleatorio); 

let numeroIngresado = parseInt(prompt("Adivina el número entre 1 y 10:"));

while (numeroAleatorio !== numeroIngresado) {
    numeroIngresado = parseInt(prompt("Incorrecto. Intenta nuevamente:"));
}

console.log("Ganaste");
alert("Ganaste");