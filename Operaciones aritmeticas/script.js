let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = "";
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch {
        pantalla.value = "Error";
    }
}

// Soporte para teclado (CORREGIDO)
document.addEventListener("keydown", function(event) {

    let tecla = event.key;

    // Evita que el input escriba automáticamente
    if (!isNaN(tecla) || "+-*/.%".includes(tecla)) {
        event.preventDefault();   // ← IMPORTANTE
        agregar(tecla);
    }

    else if (tecla === "Enter") {
        event.preventDefault();
        calcular();
    }

    else if (tecla === "Backspace") {
        event.preventDefault();
        pantalla.value = pantalla.value.slice(0, -1);
    }

    else if (tecla === "Escape") {
        event.preventDefault();
        limpiar();
    }

});