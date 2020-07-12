//Datos necesarios para que el ejercicio 5 sea personalizado
var nombre = prompt("Ingrese su nombre:","")
var apellido = prompt("Ingrese su apellido:","")
var edad = prompt("Ingrese su edad:","")
var direccion = prompt("Ingrese su direccion:","")
var telef = prompt("Ingrese su telefono:","")
//Ejercicio #5
var persona = {
    name : nombre,
    lastname : apellido,
    codigoid : numero,
    age : edad,
    address : direccion,
    phone : telef,
    };
document.getElementById("ejerciciocinco").innerHTML= "Muchas gracias por su predisposicion. Estos son los datos previamente ingresados:" + "<br>" + "El estudiante numero " + persona.codigoid + ", " + persona.name + " " + persona.lastname + " tiene " + persona.age + " años, vive en " + persona.address + " y esta disponible al siguiente contacto " + persona.phone + ".";