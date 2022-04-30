function contador(){
	//pide frase
	var texto = prompt("Escriba una frase o palabra .");

	//largo de la frase
	var largo = texto.length;

	//cuenta las veces que aparece la letra a
	var contador  = 0;


	for (var i = 0 ; i < largo; i++ ){


		if (texto.substr(i,1) == "a"){
			contador++;
		}
	}

	document.write("Hay ", contador, " letras A.");

}