

// document.getElementById('enviar').onclick = function() {
//     console.log("hixo click")
//     console.log(Math.random())
// }


//MOSTRA DATOS INTRODUCIDOS EN UN FORMULARIO
// document.getElementById('enviar').onclick = function () {
//     let usuario = document.querySelector("#user").value
//     let password = document.querySelector("#password").value
//     console.log(usuario, password)
// }

//CREANDO Y CONSULTANDO UN OBJETO
const toDoList = {
        'tipo de tarea' : "Compras",
         dia : "Lunes",
         productos : ['p1', 'p1', 'p3'],
         estado : "pendiente"
}
console.log(toDoList.estado)
console.log(toDoList["tipo de tarea"])


//CONSULTAR UN OBJETO
const superHeroes ={
    "squadName" : "Super Hero Squad", 
    "homeTown" : "Metro City", 
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
        {
            "name" : "Molecule Man",
             "age" : 29,
            "secretIdentity" : "Dan Jukes", 
            "powers" : ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name" : "Madame Uppercut",
            "age" : 39,
            "secretIdentity" : "Jane Wilson", 
            "powers" : ["Million tonne punch", "Damage resistance", "Superhuman reflexes" ]
        },
        {
            "name" : "Eternal flame",
            "age" : 49,
            "secretIdentity" : "sabra dios", 
            "powers" : ["poder 1", "poder 2", "poder 3" ]
        }
    ]
 }

 //  console.log(superHeroes.squadName)
//  console.log(superHeroes.members[0])
//  console.log(superHeroes.members[1].powers[2])
//  console.log(superHeroes.members[1].age)


 const secretIdentity = superHeroes.members[0].secretIdentity;
 const age = superHeroes.members[0].age
 const power = superHeroes.members[0].powers
 
 document.getElementById('enviar').onclick = function () {
    let element = document.querySelector("#man")
    element.textContent = JSON.stringify(secretIdentity);
    let element2 = document.querySelector("#edad_man")
    element2.textContent = JSON.stringify(age);
    let element3 = document.querySelector("#power_man")
    element3.textContent = JSON.stringify(power);
}

// document.getElementById("enviar").onclick = function() { 
//     alert('Elemento clickeado'); 
// };


document.getElementById("enviar").addEventListener('click', function() { alert('Elemento clickeado'); });


