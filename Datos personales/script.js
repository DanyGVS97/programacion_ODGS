function registrarDatos() {

    let nombre = document.getElementById("nombre").value;
    let apellidoP = document.getElementById("apellidoP").value;
    let apellidoM = document.getElementById("apellidoM").value;
    let edad = document.getElementById("edad").value;
    let carrera = document.getElementById("carrera").value;
    let correo = document.getElementById("correo").value;

    let mensaje = 
        "DATOS REGISTRADOS:\n\n" +
        nombre + "\n" +
        apellidoP + "\n" +
        apellidoM + "\n" +
        edad + "\n" +
        carrera + "\n" +
        correo;

    alert(mensaje);
}