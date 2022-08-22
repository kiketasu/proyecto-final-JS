//GENERADOR DE CURRICULUMS
//1 DATOS PERSONALES
function curriculum() {
    do {
        alert("Para empezar deberá introducir sus datos personales.");
        var nombre = prompt("Teclee su nombre y apellidos.");
        var direccion = prompt("Teclee su dirección completa.");
        var telef = Number(prompt("Teclee su número de teléfono."));
        if (isNaN(telef)) {                 //NOS ASEGURAMOS QUE SEA UN VALOR NUMERICO
            alert("Teclee un número de teléfono válido")
            curriculum();
        }
        var email = prompt("Teclee su dirección de correo electrónico."); //LA VALIDACIÓN FUNCIONA PERO DABA PROBLEMAS BUCLE
        if (nombre == [] || direccion == [] || telef == [] || email == []) {
            alert("Recuerde rellenar todos los campos correctamente.");
        }
        if (telef < 600000000 || telef > 799999999) {
            alert("Introduzca un número de teléfono válido.");
        }
    } while (nombre == [] || direccion == [] || telef == [] || telef < 600000000 || telef > 799999999 || email == []);

//2 FORMACIÓN ACADÉMICA
    do {
        var titulaciones = [];
        do {
            alert("A continuación deberá introducir sus datos académicos.");
            var num_titulos = Number(prompt("¿Cuántos títulos quiere introducir? (indique un valor numérico)"));
        } while (isNaN(num_titulos));       //NOS ASEGURAMOS QUE SEA UN VALOR NUMERICO
        var posicion = -1;
        for (let i = 0; i < num_titulos; i++) {
            posicion++;
            titulaciones.push(prompt("Teclee el nombre del título."));
            posicion++;
            titulaciones.push(prompt("Teclee el centro de estudios."));
            posicion++;
            titulaciones.push(prompt("Teclee la duración de los estudios."));
        }
        if (num_titulos == []) {
            alert("Éste campo es obligatorio");
        }
    } while (titulaciones[posicion] == [] || num_titulos == []);

//3 EXPERIENCIA LABORAL
    do {
        var trabajos = [];
        do {
            alert("A continuación deberá introducir su experiencia laboral.");
            var num_trabajos = Number(prompt("¿Cuántos trabajos quiere introducir? (indique un valor númerico)"));
        } while (isNaN(num_trabajos));      //NOS ASEGURAMOS QUE SEA UN VALOR NUMERICO
        var posicion2 = -1;
        for (let i = 0; i < num_trabajos; i++) {
            trabajos.push(prompt("Teclee la ocupación."));
            posicion2++;
            trabajos.push(prompt("Teclee el nombre de la empresa."));
            posicion2++;
            trabajos.push(prompt("Teclee la duración del trabajo."));
            posicion2++;
        }
        if (trabajos[posicion2] == []) {
            alert("No puede dejar ningún campo vacio");
        }
    } while (trabajos[posicion2] == [] || num_trabajos == []);

//4 IDIOMAS
    do {
        var idiomas = [];
        do {
            alert("Por último, introduzca los idiomas que domina.");
            var num_idiomas = Number(prompt("¿Cuántos idiomas quiere introducir? (indique un valor numérico"));
        } while (isNaN(num_idiomas));       //NOS ASEGURAMOS QUE SEA UN VALOR NUMERICO
        var posicion3 = -1;
        for (let i = 0; i < num_idiomas; i++) {
            idiomas.push(prompt("Teclee el idioma"));
            posicion3++;
            idiomas.push(prompt("Teclee el nivel"));
            posicion3++;
        }

        if (idiomas[posicion3] == []) {
            alert("No puede dejar ningún campo vacio");
        }
    } while (idiomas[posicion3] == [] || num_idiomas == []);
    alert("A continuación se imprimirá su Curriculum. Si hay algún dato incorrecto, deberá rellenar DE NUEVO TODOS LOS CAMPOS");

//IMPRIMIR CUERPO DEL CURRICULUM (METODO DOCUMENT.WRITE(no) Y DOCUMENT.GETELEMENTBYID(si))
//DATOS PERSONALES
    document.getElementById("demo1").innerHTML = `<h2><b>Información Personal</b></h2><br>Nombre: ${nombre} <br> Dirección: ${direccion} <br> Telef.: ${telef} <br> email: ${email}
    <br><br>`;
//FORMACION ACADEMICA
    document.getElementById("demo2").innerHTML = '<h2><b>Formación Académica</b></h2><br>';
    var posicion4 = 0;
    let textoacum = "";
    for (let i = 0; i < num_titulos; i++) {
        textoacum += `Título: ${titulaciones[posicion4]} <br> Centro: ${titulaciones[(posicion4 + 1)]} <br> Duración: ${titulaciones[(posicion4 + 2)]}<br><br>`;
        posicion4 += 3;
    }
    document.getElementById("demo3").innerHTML = textoacum;
//EXPERIENCIA
    document.getElementById("demo4").innerHTML = '<h2><b>Experiencia Laboral</b></h2><br>';
    var posicion5 = 0;
    let textoacum1 = "";
    for (let i = 0; i < num_trabajos; i++) {
        textoacum1 += `Ocupación: ${trabajos[posicion5]} <br> Empresa: ${trabajos[posicion5 + 1]} <br> Duración: ${trabajos[posicion5 + 2]}<br><br>`;
        posicion5 += 3;
    }
    document.getElementById("demo5").innerHTML = textoacum1;
//IDIOMAS
    document.getElementById("demo6").innerHTML = '<h2><b>Idiomas</b></h2><br>';
    var posicion6 = 0;
    var textoacum2 = "";
    for (let i = 0; i < num_idiomas; i++) {
        textoacum2 += `${idiomas[posicion6]} <br> Nivel: ${idiomas[posicion6 + 1]} <br><br>`;
        posicion6 += 2;
    }
    document.getElementById("demo7").innerHTML = textoacum2;
//MOSTRAR ELEMNTOS OCULTOS( CAJA CURRICULUM Y IMG)
    document.querySelector(".cuerpo").style.display = "block"; //style.display="block"LO HACE VISIBLE UNA VEZ RELLENADOS LOS DATOS
}











