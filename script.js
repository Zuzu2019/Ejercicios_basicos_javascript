
//EJERCICIO PROMPT
// var nombre = prompt("Ingresa tu nombre")
// var lastname = prompt("Ingresa tu apellido")
// alert(`Bienvenido a nuestra pagina ${nombre} ${lastname}`)7


//EJERCICIO SUMA
// var n1 = prompt("Ingrese un valor")
// var n2 = prompt("Ingrese otro valor")
// var resultado = Number(n1) + Number(n2);
// alert(`La suma de los valores es: ${resultado}`)


//EJERCICIO DE LONGITUD DE CARACTERES
// var texto = prompt("Ingrese un texto")
// var longitudText = texto.length
// alert(`El largo del texto ingresado es de ${longitudText} caracteres`)


//EJERCICIO OPERADORES DE COMPARACION Y LOGICO
// let x = 30
// let y = "a"
// console.log(y === "b" || x >= 30)
// let x = 15
// let y = 2
// console.log(!( x == "15" || x === y ) && ! (y !== 2 && x <= y))
// let x = "5"
// let y = "5"
// console.log(x===y)


//EJERCICIOS CONDICIONALES 1
// let nombre = prompt("Ingrese tu nombre")
//    if(nombre === ""){
//     prompt("No ha introducido ningun nombre vuelve a intentar")
//    } else {
//     alert (`Bienvenid@ ${nombre}`)
//    }


//EJERCICIOS CONDICIONALES 2
// let number = prompt("Ingrese un numero")
//    if(number%2==0){
//     alert("Es numero par")
//    } else {
//     alert("Numero impar")
//    }


//EJERCICIO SWITCH
// let peliculaEligida = prompt( 
//     "Elige una pelicula, solo ingresa ID (1, 2, 3)"+ "\n"+
//     "Lista Peliculas: " + "\n" +
//     "1. Amigos imaginarios" + "\n" + 
//     "2. Furiosa " + "\n"+
//     "3. Shrek"
// )
//     switch (peliculaEligida) {
//         case "1":
//         document.write("<h1>Su ticket ha sido omitido</h1>" + "<img src = https://www.la-prensa.com.mx/gossip/tzempe-amigos-imaginarios.jpg/ALTERNATES/LANDSCAPE_1140/amigos-imaginarios.jpg>")
//         break;

//         case "2":
//             document.write("<h1>Su ticket ha sido omitido</h1>" + "<img src =https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2024/05/furiosa-a-mad-max-saga-1200x900-1.jpg>")
//             break;
//         case "3":
//             document.write("<h1>Su ticket ha sido omitido</h1>" + "<img src =https://hips.hearstapps.com/hmg-prod/images/shrek-pelicula-asno-fiona-1672436097.jpg>")
//             break;

//         default: 
//         document.write("<p>Nada</p>")
//     }


//EJERCICIO ADIVINA EL NUMERO
// let numbersecret = 4;
// let respuesta = prompt("Adivina el numero")
// if(Number(respuesta) === Number(numbersecret)) {
//     alert("Adivino el numero")
// } else if(Number(numbersecret) > Number(respuesta)){
//     alert("numero secreto es mas alto" + "\n" + "Se equivoco de numero")
// } else {
//     alert("numero secreto es mas bajo")
// }


//OPERADOR TERNARIO CONDICIONAL
// let respuesta = prompt("¿Cuántos tragos has tomado?")
// Number(respuesta) > 0 ? alert("No puedes manejar") : alert("Nos alegra que seas un conductor responsable")


//CALCULADORA
// let respuesta = prompt("¿Qué operacion necesita? " + "\n" + "1. Suma" + "\n" + "2. Resta" + "\n" + "3.Multiplicacion" + "\n" + "4. División")
// let n1 = prompt("Ingrese el primer número")
// let n2 = prompt("Ingrese el segundo número")
 
// let suma = Number(n1) + Number(n2)
// let resta = Number(n1) - Number(n2)
// let multiplicacion = Number(n1) * Number(n2)
// let division = Number(n1) / Number(n2)
//     switch (respuesta) {
//             case "1":
//                 alert(`La suma es ${suma}`)
//             break;
//             case "2":
//                 alert(`La resta es ${resta}`)
//                 break;
//             case "3":
//                 alert(`La multiplicacion es ${multiplicacion}`)
//                 break;
//             case "4":
//                 alert(`La division es ${division}`)
//                 break;
//             default: 
//             document.write("<p>No ingresaste nada</p>")
//         }


//EJERCICIO PARA MOSTRAR NUMEROS CON FOR
// for (i = -20 ; i <=30; i++) {
//     console.log(i);
// }
// for (i = -20 ; i <=30; i++) {
//     if(i%2===0) {
//         console.log(i);
//     } 
// }
// let number = 150;
// for (i = 2; i <=number; i++) {
//     if(number % i === 0) {
//         console.log("Es un numero primo" + i)
//     } else {
//         console.log("No es un numero primo" + i)
//     }
// }

//EJERCICIO PARA GENERAR UNA COMPARACION 
 let genero = prompt("Si es Mujer ingrese (M) o si es hombre ingrese (H)")
 let edad = prompt("Ingrese su edas")

 if(genero === "M" && Number(edad) <= 60 || genero === "H" && Number(edad) <= 65) {
    console.log("Aun no se jubila")
 } else {
    console.log("Se va a jubilar")
 }

