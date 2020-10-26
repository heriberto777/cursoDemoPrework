
var nombre = "Oscar";

var edad;

edad = 30;

edad

var elementos = ["Computadora", "Celular"];

var persona = {
    nombre: "Diego",
    edad: 30
}

persona;

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