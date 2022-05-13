/* RETO 1
Realizar una función que dada una fecha de nacimiento te devuelva el signo
zodiacal
*/
function zodiaco(n1:number,n2:number):string{
    let signo:string = "";

   if((n2==3 && n1>19 && n1<31) || (n2==4 && n1>0 && n1<13) ){
      signo = "aries";
      return signo; 
   }
   if((n2==4 && n1>20 && n1<31) || (n2==5 && n1>0 && n1<21) ){
      signo = "Tauro";
      return signo; 
   }
   if((n2==5 && n1>21 && n1<31) || (n2==6 && n1>0 && n1<20) ){
      signo = "Géminis";
      return signo; 
   }
   if((n2==6 && n1>21 && n1<31) || (n2==7 && n1>0 && n1<22) ){
      signo = "Cáncer";
      return signo; 
   }
   if((n2==7 && n1>23 && n1<31) || (n2==8 && n1>0 && n1<22) ){
      signo = "Leo";
      return signo; 
   }
   if((n2==8 && n1>23 && n1<31) || (n2==9 && n1>0 && n1<22) ){
      signo = "Virgo";
      return signo; 
   }
   if((n2==9 && n1>23 && n1<31) || (n2==10 && n1>0 && n1<22) ){
      signo = "Libra";
      return signo; 
   }
   if((n2==10 && n1>=23 && n1<=31) || (n2==11 && n1>=0 && n1<=21) ){
      signo = "Escorpio";
      return signo; 
   }
   if((n2==11 && n1>=22 && n1<=31) || (n2==12 && n1>=0 && n1<=21) ){
      signo = "Sagitario";
      return signo; 
   }
   if((n2==12 && n1>=22 && n1<=31) || (n2==1 && n1>=0 && n1<=19) ){
      signo = "Capricornio";
      return signo; 
   }
   if((n2==1 && n1>=20 && n1<=31) || (n2==2 && n1>=0 && n1<=18) ){
      signo = "Acuario";
      return signo; 
   }
   if((n2==2 && n1>=19 && n1<=31) || (n2==3 && n1>=0 && n1<=20) ){
      signo = "Piscis";
      return signo; 
   }

}

console.log(zodiaco(7,3));

/*
Realizar un procedimiento que dado un país te imprima en que continente estás.
(Max 5 países por continente)
*/
function continente(pais) {
    if (pais == "España" || pais == "Francia" || pais == "Alemania" || pais == "Italia" || pais == "Portugal") {
        console.log("Estas en Europa");
    }
    else if (pais == "Kenia" || pais == "Senegal" || pais == "Ghana" || pais == "Argelia" || pais == "Marruecos") {
        console.log("Estas en Africa");
    }
    else if (pais == "Mongolia" || pais == "Bangladesh" || pais == "Tailandia" || pais == "Vietnal" || pais == "China") {
        console.log("Estas en Asia");
    }
    else if (pais == "Argentina" || pais == "Mexico" || pais == "Costa Rica" || pais == "Canada") {
        console.log("Estas en America");
    }
    else if (pais == "Nueva Zelanda" || pais == "Fiyi" || pais == "Samoa" || pais == "Palaos") {
        console.log("Estas en Oceania");
    }
    else {
        console.log("Pais no valido");
    }
}
continente("Mexico");

 /* RETO 9
 Realizar una función que te imprima por consola el siguiente mensaje:
o “El numero es par”, si el numero introducido como parámetro de entrada
es par
o “El numero es impar”, si el numero introducido como parámetro de
entrada es impar
*/

export function mensaje(num:number):void{
    if(num%2 == 0){
       console.log("El numero es par")
    }else{console.log("El numero es impar")}
   
}

mensaje(7)
mensaje(4)


console.log("cambio de reto")