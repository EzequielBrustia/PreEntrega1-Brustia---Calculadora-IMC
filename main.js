let opcion = parseInt(prompt("Bienvenido al programa para calcular su Indice de Masa Corporal \nIngrese 1 para continuar y 0 para salir del programa."));

const ingreso = 1;
const salir = 0;

for (let i=0; i<3; i++){

    if (opcion == ingreso){
        let nombrePersona = prompt("Ingrese su nombre y apellido");
        alert("Hola " + nombrePersona + ", a continuacion te pediremos algunos datos para calcular tu Indice de Masa Corporal (IMC).");
    
        let alturaPersona = parseInt(prompt("Ingrese su altura en cm"));
        let pesoPersona = parseInt(prompt("Ingrese su peso en kg"));
    
        let alturaPersona2 = Math.pow((alturaPersona/100),2);
    
        let resultado = (pesoPersona/alturaPersona2);
            alert("Su resultado es: " + resultado.toFixed(2) + " , a continuacion le mostraremos en que rango se encuentra")
    
        // ciclo para resultado si estal valor es tal condicion
    
        function calcular(){
    
        if (resultado.toFixed(2) < 18.5){
            alert(nombrePersona + " - Tu resultado fue: " + resultado.toFixed(2) + " Tu peso es inferior a lo normal, deberias consultar con un profesional. (Parametro: < 18.5)");
        } else {
        if (resultado.toFixed(2) >= 18.5 && (resultado.toFixed(2)) <= 24.9){
            alert(nombrePersona + " - Tu resultado fue: " + resultado.toFixed(2) + " Tu peso es normal. (Parametro:  > 18.5 <= 24.9)");
        } else {
        if (resultado.toFixed(2) >= 25.0 && (resultado.toFixed(2)) <= 29.9){
            alert(nombrePersona + " - Tu resultado fue: " + resultado.toFixed(2) + " Tu peso es superior a lo normal. (Parametro:  > 25.0 <= 29.9)");
        } else {
            alert(nombrePersona + " - Tu resultado fue: " + resultado.toFixed(2) + " Tu peso se encuentra en el rango de Obesidad, deberias consultar con un profesional. (Parametro: > 30.0)");
            }
          }
         }
        }
        
        calcular()
        alert("Gracias por utilizar nuestro programa.")

        } else if (opcion == salir) {
            alert("Gracias por utilizar nuestro programa.")
        } else { 
        opcion= parseInt(prompt("Opcion incorrecta. \nIngrese 1 para continuar y 0 para salir del programa."))
    }
}
    