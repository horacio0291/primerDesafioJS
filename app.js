//WHILE --->

let continuar;

while(continuar != "no"){
    let comprar = prompt("DESEA CONFIRMAR LA COMPRA (SI/NO)").toLowerCase();
    if (comprar === "si"){
        continuar = prompt("GRACIAS POR SU COMPRA ¿DESEA LLEVAR ALGO MAS?😀 (SI/NO)").toLowerCase();
        if(continuar != "si" && continuar != "no"){
            alert("NO ES UNA OPCIÓN VÁLIDA, RECUERDE PONER (SI/NO) 😐")
        }
    }else if (comprar === "no"){
        alert ("GRACIAS POR SU VISITA! PUEDE SEGUIR VIENDO NUESTRO CATÁLOGO");
        continuar = "no";
    }
    else{
        alert("NO ES UNA OPCIÓN VÁLIDA, RECUERDE PONER (SI/NO) 😐")
    }
}

//SIMULA EL MOMENTO DE HACER CLICK EN COMPRAR, SI QUIERE SEGUIR COMPRANDO VUELVE A DAR EL CARTEL DE CONFIRMAR COMPRA
//PORQUE ESTARIA SIMULANDO EL MOMENTO QUE VOLVIO A APRETAR EL BOTON DE COMPRAR

//FOR --->

 let numero = Number(prompt("INGRESE UN NUMERO ENTRE 1 Y 10: "));
 if(numero <= 0 || numero > 10){
     alert("DEBE INGRESAR UN NUMERO ENTRE 1 Y 10😐")
 }else{
     for(let i = numero; i != -1; i--){
             console.log("LA BOMBA EXPLOTARÁ EN: "+i+"⏱");
         }
         console.log("BOOM 💥💢💥");
         alert("REVISE LA CONSOLA");
 }

 //SIMULA UN CONTADOR HACIA UNA "EXPLOSIÓN", PONES UN NUMERO DENTRO DEL RANGO Y HACE UN CONTEO HACIA ABAJO
 // HASTA QUE SALE DEL BUCLE Y MUESTRA LA "EXPLOSIÓN"

 
