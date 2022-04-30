function vocales(){
    //pide frase
    var texto = prompt("Escriba una frase o palabra .");

    //largo de la frase
    var largo = texto.length;

    //array para almacenar el numero de repeticiones de cada vocal
    const vocal= [0, 0, 0, 0 ,0 ];

    //ciclo para recorrer el texto

    for (var i = 0 ; i < largo; i++ ){

        switch (texto.substr(i,1)) {
            case "a":
              vocal[0]++;
              break;

        case "e":
            vocal[1]++;
            break;

        case "i":
            vocal[2]++;
            break;

        case "o":
            vocal[3]++;
            break;

        case "u":
            vocal[4]++;
            break;

        default: break;

      }
 
    }

    document.write("A: ", vocal[0]);
    document.write("<br> E: ", vocal[1]);
    document.write("<br> I: ", vocal[2]);
    document.write("<br> O: ", vocal[3]);
    document.write("<br> U: ", vocal[4]);
    
}
