import {mensaje} from "./RepasoIf"
import{sumaCaracteres} from "./RepasoFor"

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
