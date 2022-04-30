
//función para calcular numero mayor
function mayor(){

	//pide los números al usuario
	var numero1 = prompt("Escriba el primer número");
	var numero2 = prompt("Escribe escriba el segundo número");

	//imprimer el numero mayor
	if (numero1 > numero2) {
		document.write("El número mayor es: ", +numero1);
	} else {
		document.write("El número mayor es: ", +numero2);
	}
}



