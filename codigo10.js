//Ejercicio #10 demostrar el tipo string, numerico y objeto
var name2 = "Kim";
var age2 = 25;
var object = {
    characteristic1 : "Bianca",
    characteristic2 : 20
};
document.getElementById("ejerciciodiez").innerHTML= "Variable " + typeof name2 + " " + name2 + "<br>" + "Variable " + typeof age2 + " " + age2 + "<br>" + "Variable " + typeof object + " caracteristicas del objeto, 1: " + object.characteristic1 + " y 2: " + object.characteristic2 + ".";