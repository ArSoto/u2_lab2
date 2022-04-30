function vocales(){
    //pide frase
    var texto = prompt("Escriba una frase o palabra .");

    //largo de la frase
    var largo = texto.length;

    //ciclo para recorrer el texto
    for (var i = 0 ; i < largo; i++ ){


        if (texto.substr(i,1) == "a" || texto.substr(i,1) == "e" ||
          texto.substr(i,1) == "i"|| texto.substr(i,1) == "o" || texto.substr(i,1) == "u"){
           
           document.write(texto.substr(i,1), " ");
        }
    }
}