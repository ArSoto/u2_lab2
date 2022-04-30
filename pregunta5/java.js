function par(){
	var numero = prompt("Escriba número");

	if(numero%2 == 0){

		document.write("El numero ",+numero, " es divisible por 2 " );
	}else{
		document.write("El numero ",+numero,"  NO es divisible por 2 " );
	}
}