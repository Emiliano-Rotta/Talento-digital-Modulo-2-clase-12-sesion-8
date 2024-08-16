//Que tipos de datos vimos??

//string, numero, bueleano,   
//"hola",  525,   true o false

//array
// var alumnos = ["Romina", "Sebastian", "Brandon"]
var edad = [25, 28, 23]
var perros = [true, false, false]
var objetos = [{}]
var array = [[], [], []]

var todoMesclado = ["Romina", 25, true, ["modulo 1 ", "modulo 2"]]


//----------------
// var saludo = "Hola Katherine"

// console.log(saludo)
// //                0           1           2
var alumnos = ["Romina", "Sebastian", "Brandon"]


// console.log(alumnos)

// -----------------  0        1    2              3
// var todoMesclado = ["Romina", 25, true, ["modulo 1 ","modulo 2"]]

// console.log(todoMesclado[3][0])


//                0                         1                      2     3 
// var ejercicio = ["hola", ["Rodrigo", [25, ["quiero llegar acá"]]], {}, "chau"]
//                 //          0                   1
//                 //                     0         1         
//                 //                               0
// console.log(ejercicio[1][1][1][0])


var fichaAlumnos = [
    {
        nombre: "Sebastian",
        edad: 25,
        modulosAsistidos: ["modulo 2"],
        conocimientosPrevisos: true,
        mascotas: {
            tipo: "perro",
            peso: 30
        }
    },
    {
        nombre: "Brandon",
        edad: 18,
        modulosAsistidos: ["modulo 1", "modulo 2"],
        conocimientosPrevisos: false,
        mascotas: {
            tipo: "gato",
            peso: 10
        }
    },
    {
        nombre: "Erick",
        edad: 35,
        modulosAsistidos: ["modulo 1"],
        conocimientosPrevisos: true,
        mascotas: {
            tipo: "pez",
            peso: 0.1
        }
    },
    {
        nombre: "Sebastian",
        edad: 25,
        modulosAsistidos: ["modulo 2"],
        conocimientosPrevisos: true,
        mascotas: {
            tipo: "perro",
            peso: 30
        }
    },
    {
        nombre: "Brandon",
        edad: 18,
        modulosAsistidos: ["modulo 1", "modulo 2"],
        conocimientosPrevisos: false,
        mascotas: {
            tipo: "gato",
            peso: 10
        }
    },
    {
        nombre: "Rodrigo",
        edad: 35,
        modulosAsistidos: ["modulo 1"],
        conocimientosPrevisos: true,
        mascotas: {
            tipo: "pez",
            peso: 0.1
        }
    },
    {
        nombre: "Sebastian",
        edad: 25,
        modulosAsistidos: ["modulo 2"],
        conocimientosPrevisos: true,
        mascotas: {
            tipo: "perro",
            peso: 30
        }
    },
    {
        nombre: "Bernarda",
        edad: 25,
        modulosAsistidos: ["ninguno"],
        conocimientosPrevisos: true,
        mascotas: {
            tipo: "caballo",
            peso: 500
        }
    }

]

// console.log(fichaAlumnos[2].mascotas.tipo)
// console.log(fichaAlumnos[1].modulosAsistidos[1])


// console.log("hola " + fichaAlumnos[0].nombre)
// console.log("hola " + fichaAlumnos[1].nombre)
// console.log("hola " + fichaAlumnos[2].nombre)
// console.log("hola " + fichaAlumnos[3].nombre)
// console.log("hola " + fichaAlumnos[4].nombre)
// console.log("hola " + fichaAlumnos[5].nombre)
// console.log("hola " + fichaAlumnos[6].nombre)
// console.log("hola " + fichaAlumnos[7].nombre)
// console.log("hola " + fichaAlumnos[8].nombre)




// for (let i = 0; i < fichaAlumnos.length; i++) {
//     console.log("hola " + fichaAlumnos[i].nombre)
// }

// for (let i = 0; i < fichaAlumnos.length; i++) {
//     if(fichaAlumnos[i].mascotas.tipo === "pez"){
//         console.log(fichaAlumnos[i].nombre)
//     }     
// }

//Quiero el nombre, y los modulos asistitdos de las persona/s que tengan un animal mayor a 100kg

//Respuesta de Ghiselle
// for (var i = 0; i< fichaAlumnos.length; i++) {
//     if(fichaAlumnos[i].mascotas.peso > 100){
//         console.log(fichaAlumnos[i].nombre)
//         console.log(fichaAlumnos[i].modulosAsistidos)
//     }
// }


