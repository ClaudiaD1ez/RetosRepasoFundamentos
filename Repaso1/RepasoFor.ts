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

 /* RETO 8
Realizar una función que te devuelva la suma del numero de caracteres de las
palabras almacenadas en un array.*/

export function sumaCaracteres(palabras:string[]):number{
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