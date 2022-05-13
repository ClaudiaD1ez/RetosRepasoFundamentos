/*
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


/* Reto3
Realizar una función que imprima los números impares existentes hasta el
número indicado como parámetro de entrada.
*/

function impar(n:number):number[]{
   let numeros = [];
   for(let i=0 ; i<=n ; i=i+2){
       numeros.push(i+1)
   }

   return numeros

}

console.log(impar(19));


/* RETO4
Realizar una función que como parámetro de entrada reciba un array y como
salida devuelva el array revertido.
*/

function delreves(array:number[]):number[]{
   let nuevoArray:number[] = [];

   for(let i=array.length-1; i>=0 ;i--){
        nuevoArray.push(array[i])
   }
    return nuevoArray
}
 
console.log(delreves([2,3,4,5,6,7,8]));

/* RETO 5
Realizar una función que reciba como parámetro un array de strings que
contenga colores y te imprima en cada caso si el color está en el arcoíris o no.
*/

function arcoIris(array:string[]):void{
   let color = "";
   for(let i=0 ; i<array.length ; i++){
     

      if(array[i] == "rojo"|| array[i] == "naranja" || array[i] == "amarillo" || array[i] == "verde" ||
      array[i] =="añil" || array[i] == "azul" || array[i] == "violeta"){

          color = "El " + array[i] + " esta entre los colores del arcoíris."
         console.log(color) 
      }else{
       color = "El " + array[i] + " no esta entre los colores del arcoíris."
       console.log(color) }
   }
            // si uso return en vez de console.log no me funciona el bucle¿por que?
}

arcoIris(["azul","morado","gris"]);

/*  RETO 6
Realizar una función que te devuelva si existe un numero par en el array de
números que introduces como parámetro de entrada.
*/
  function par(array:number[]):boolean{
   let esPar = false;                                    

    for(let i=0 ; i<array.length ; i++){                  //recorre cada numero
        
       if(array[i]%2 == 0){                               //si hay alguno par cambia la variable a true
          esPar = true
       }                                          
    }
    return esPar
}

let arrayNum:number[] = [1,3,7,4,9,8]
console.log( par(arrayNum));
//
function par2(array:number[]):boolean{
   let esPar2 = false;
   while(esPar2 == false){                        //mientras sea falso
      for(let i=0 ; i<array.length ; i++){        //recorre cada numero

         if(array[i]%2 == 0){                 
            esPar2 = true
         }                                           
      }
      return esPar2

   }
}

let arrayNum2:number[] = [1,3,7,4,9,8]
console.log( par2(arrayNum2));


console.log("cambio de reto")
/* RETO 7
Realizar una función que reciba un array de nombres y te devuelva verdadero si
y solo si todos los nombres empiezan por M.
*/


function nombresM(nombres:string[]):boolean{
   let letraM = true
   let i = 0
    while(letraM && i<nombres.length ){
       
          if(nombres[i][0] != "M"){
           letraM = false
          }
      i++
    }
    return letraM
}

 let listaNombres = ["Maria","Marcos","Manuel","Marina","Miriam"]
 let listaNombres2 =["Maria","Marcos","Carlos","Marina","Miriam"]

 console.log(nombresM(listaNombres));
 console.log(nombresM(listaNombres2));



/* RETO 8
Realizar una función que te devuelva la suma del numero de caracteres de las
palabras almacenadas en un array.*/

 function sumaCaracteres(palabras:string[]):number{
        let suma = 0
        for(let i=0 ; i<palabras.length ; i++){           //recorre cada palabra
           palabras[i].split("")
           for( let j=0 ; j<palabras[i].length ; j++){    //recorre cada letras
              suma += 1                                    //suma 1 por cada letras a la variable suma
           }
        }
      return suma
 }

 let arrayPalabras:string[] = ["casa","almacen","perro","cafe"]  //20 letras(suma=20)
 console.log(sumaCaracteres(arrayPalabras)) ;

 /* RETO 9
 Realizar una función que te imprima por consola el siguiente mensaje:
o “El numero es par”, si el numero introducido como parámetro de entrada
es par
o “El numero es impar”, si el numero introducido como parámetro de
entrada es impar
*/

function mensaje(num:number):void{
    if(num%2 == 0){
       console.log("El numero es par")
    }else{console.log("El numero es impar")}
   
}

mensaje(7)
mensaje(4)


console.log("cambio de reto")

/* RETO 10
Utilizando las dos funciones anteriores indicar si es par o impar la suma de los
caracteres de cada uno de los siguientes arrays:
o [“Casa”, “Coche”, “Ciudad”, “Cesta”]
o [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
o [“Venezuela”, “Veneno”, “Voltaje”]
*/

let palabrasUno:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let palabrasDos:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let palabrasTres:string[] = ["Venezuela", "Veneno", "Voltaje"];

let numeroUno = sumaCaracteres(palabrasUno);   //20 letras es par
mensaje(numeroUno);

let numeroDos = sumaCaracteres(palabrasDos);   //37 letras es impar
mensaje(numeroDos);

let numeroTres = sumaCaracteres(palabrasTres);  //22 letras es par
mensaje(numeroTres);

