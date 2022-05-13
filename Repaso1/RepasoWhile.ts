//RETO 6 (version2)

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

