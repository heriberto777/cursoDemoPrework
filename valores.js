
var nombre = "Oscar";

var edad;

edad = 30;

edad

var elementos = ["Computadora", "Celular"];

var persona = {
    nombre: "Diego",
    edad: 30
}

persona.nombre;

//Declarativas

function miFuction() {
    return 3;
}

//Expresion

var miFuction = function(){
    
}


var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu) {
      if((user === op1 && cpu === op3) ||
      (user === op2 && cpu === op1) || 
      (user === op3 && cpu === op2)) 
      {
          console.log("Usuario Gano")
      } else {
          console.log("Gano la computadora")
      }
    }
}

var frutas = ["Manzana","Platano","Cereza","Fresa"];
console.log(frutas);


//Declarativas
function articulos() {
    return 3;
}


//Expresion

var articulos1 = function(){
    return a + b;
}

var articulo1 = function(a, b){
    return a + b;
}

articulo1(14,1)


function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

saludarEstudiantes("Heriberto Gonzalesz");

//Declarativa
function sumar(a,b){
    var resultado = a + b;
    return resultado;
}

sumar(6,6);


//Scope 

var nombre = "Heriberto";
function fun() {
    var apellido = "Gonzalez";
    console.log(nombre + " " + apellido);
}

fun();


if(false) {
    console.log("HOla");
} else {
   console.log("nada todavia");
}

var edad = 18;
if(edad === 18) {
    console.log("PUede votar");
} else if (edad > 18){
    console.log("PUede votar nuevamente");
} else {
    console.log("eres un chavo, todavia");
}


var piedra = 1;
var tijera = 2;
var papel = 3;
var cpu = Math.floor(Math.random() * 3)

function P(usuario, computo){
    if(usuario != computo){
        if (usuario ===  piedra && computo === tijera ) {
            console.log("Gane!!!");
        } else if (usuario ===  papel && computo === piedra ) {
            console.log("Gane!!!");
        } else if (usuario ===  tijera && computo === papel ) {
            console.log("Gane!!!");
        } else {
            console.log("IA Gano");
        }
    } else if (usuario === computo) {
        console.log("Hugo empaque!")
    }
}

P(piedra, cpu)


//switch

var piedra = 0;
var tijera = 1;
var papel = 2;
var cpu = Math.floor(Math.random() * 3)

function p(usuario, computo){
    switch(true){
        case (usuario === computo):
            console.log("Que rayo, hugo un emaque" + usuario, computo);
            break;
        case (usuario === papel && computo === tijera):
             console.log("Gane!!!" + usuario, computo);
             break;
        case (usuario ===  papel && computo === piedra ):
            console.log("Gane!!!" + usuario, computo);
            break;
        case (usuario ===  tijera && computo === papel ):
            console.log("Gane!!!"+ usuario, computo);
            break;
        default: 
            console.log("Gano la maquina!"+ usuario, computo);
    }

}

p(tijera, cpu)



var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"

var resultado = function(user, pc){
 if (user != pc){
        if(user === op1 && pc === op3){
            console.log ("ganó user con " + user)
        }else if (user === op2 && pc === op1){
            console.log ("ganó user con" + user)
        }else if (user === op3 && pc === op2){
            console.log ("ganó user con " + user)
        }else{
            console.log ("Ganó pc con " + pc)
    }
 }else {
        console.log ("empate")
}
};

resultado (op1,op3)

let frutas = ["Frutas", "Manzana"];
// var agregarFrutas = frutas.push("Guineo");
// var quitarUltimaFruta = frutas.pop(); //elimina el ultimo elemento de un array
// var agregarAlInicio = frutas.unshift("Guineo") // Agregar un elemento al inicio del array
// var eliminarAlInicio = frutas.shift(); //Quita el elemento del inicio de un array
// var posicion = frutas.indexOf("Manzana") //Me muestra la posicion del elemento en el Array
console.log(frutas)


var estudiantes = ["Heriberto", "Elizabeth", "Isaac", "Gabriel", "Diana"]; //Array

//Tarea
function saludarEstudiante(estudiante){ 
    console.log(`Hola, ${estudiante}`);
}

//Loops For
// for(i = 0; i < estudiantes.length; i++){
//     saludarEstudiante(estudiantes[i])
// }

for(var estudiante of estudiantes){
     saludarEstudiante(estudiante)
}

//while
var estudiantes = ["Heriberto", "Elizabeth", "Isaac", "Gabriel", "Diana"]; //Array

//Tarea
function saludarEstudiante(estudiante){ 
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante)
}


//Objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleAuto: function() {
        console.log(`Mi Auto ${this.marca} ${this.modelo} ${this.annio}`)
    }
}

console.log(miAuto.detalleAuto())

//Funcion constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// var autoNuevo = new auto("Toyota", "Corolla", 2020)
// console.log(autoNuevo)

var autos = [];
for (var i = 0; i < 5; i ++){
    var marca = prompt("Ingrese marca");
    var modelo = prompt("Ingrese modelo");
    var annio = prompt("Ingrese año");
    autos.push(new auto(marca, modelo, annio));
    console.log(autos[i])
}


var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Laptop", costo: 500},
    {nombre: "Docker", costo: 30},
    {nombre: "ReactJS", costo: 50},
    {nombre: "Vue", costo: 50},
    {nombre: "Teclado", costo: 1500},
    {nombre: "Monitor", costo: 2500}
]
var articulosCosto = articulos.some(function(articulo){
    return articulo.costo <= 50; // === exactamente el nombre
})

console.log(articulosCosto)




articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})





var articulosCosto = articulos.find(function(articulo){
    return articulo.nombre === "ReactJS"; // === exactamente el nombre
})

console.log(articulosCosto)

var articulosCosto = articulos.map(function(articulo){
    return articulo.costo;
})

console.log(articulosCosto)

var articulosCosto = articulos.filter(function(articulo){
    return articulo.costo < 50;
})

console.log(articulosCosto)


//Scope
var fruta = "Manzana";

function comer()
{
    var otraFruta = "Banana";

    function lavar(){
        console.log("Se esta lavando " + otraFruta);

    }

    lavar();
    console.log("Estamos comiendo " + otraFruta)
}

comer();

//Clausuras (Clousures)
function crearContador() {
    let contador = 0;

   return function incrementar() {
        contador = contador + 1;
        return contador;
    }
}

const contador1 = crearContador();

console.log(contador1())







