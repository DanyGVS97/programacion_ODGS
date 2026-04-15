document.getElementById("CalculadoraForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const numero1 = parseFloat(document.getElementById("num1").value);
    const numero2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            resultado = numero2 !== 0 ? numero1 / numero2 : "Error: División por cero";
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});