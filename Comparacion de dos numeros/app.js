let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));


if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor ingresa números válidos.");
} else {
    if (numero1 > numero2) {
        console.log(numero1 + " es mayor que " + numero2);
    } else if (numero1 < numero2) {
        console.log(numero1 + " es menor que " + numero2);
    } else {
        console.log("Ambos números son iguales.");
    }
}