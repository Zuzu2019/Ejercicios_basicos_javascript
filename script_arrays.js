
//MOSTRAR LOS ELEMENTOS DE UN ARRAY
// let ensaladaFrutas  = ['manzana', 'durazno', 'platano', 'jicama', 'AAA']
// for ( i = 0; i < ensaladaFrutas.length; i++){
//     console.log(ensaladaFrutas[i])
// }

// //ELIMINAR UN ELEMENTO DE UN ARRAY A TRAVES DE SU INDICE
// let toDoList = ['diseñar', 'maquetar', 'programar', 'testear']
// let eliminar = toDoList.indexOf('programar')
// toDoList.splice(eliminar, 1)
// console.log(toDoList)

//SUMAR ELEMENTOS DE UN ARRAY Y LUEGO SACAR PROMEDIO
let edades = [10, 20, 30, 20, 18, 7, 5, 67]
let suma = 0
for(i = 0; i < edades.length; i++){
    suma += edades[i]
}
console.log(suma/edades.length)

//AÑADIR ELEMENTOS A UN ARRAY VACIO DONDE EL USUARIO INGRESA LOS ELEMENTOS
let listaDeSuper = []
let respuesta = []
for (let i = 0; i< 5; i++){
    respuesta = prompt("Ingresa un producto")
    listaDeSuper.push(respuesta)
}
console.log(listaDeSuper)
