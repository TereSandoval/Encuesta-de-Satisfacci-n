function Recuperar() {
    var texto = "";
    
    texto += "El nombre recuperado es: " + document.getElementById("txtNombre").value + "<br/>";
    texto += "El correo electrónico recuperado es: " + document.getElementById("txtEmail").value + "<br/>";
    texto += "Comentarios recuperados: " + document.getElementById("txtComentario").value + "<br/>";
    
    if (document.getElementById("radioExcelente").checked)
        texto += "La calificación seleccionada es: " + document.getElementById("radioExcelente").value + "<br/>";
    else if (document.getElementById("radioBueno").checked)
        texto += "La calificación seleccionada es: " + document.getElementById("radioBueno").value + "<br/>";
    else if (document.getElementById("radioRegular").checked)
        texto += "La calificación seleccionada es: " + document.getElementById("radioRegular").value + "<br/>";
    else if (document.getElementById("radioMalo").checked)
        texto += "La calificación seleccionada es: " + document.getElementById("radioMalo").value + "<br/>";
    
    texto += "El aspecto seleccionado es: " + document.getElementById("selectBox").value + "<br/>";
    
    if (document.getElementById("radioSi").checked)
        texto += "Recomendaría nuestros productos/servicios: Sí<br/>";
    else if (document.getElementById("radioNo").checked)
        texto += "Recomendaría nuestros productos/servicios: No<br/>";
    
    document.getElementById("RecuperarDatos").innerHTML = texto;
}