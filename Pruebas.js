var articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "Pasola", costo: 1500},
    {nombre: "Carro", costo: 25000},
    {nombre: "Pelota", costo: 300},
    {nombre: "Laptop", costo: 1800},
    {nombre: "Iphone", costo: 300}

]

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Pasola"
});

encuentraArticulo

var articulosMap = articulos.map(function(articulo){
    return articulo.nombre
})


articulosMap

var articulosFilter = articulos.filter(function(articulo){
    return articulo.costo < 1500;
})

articulosFilter


articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});



var frutas = ["Manzana", "Pera", 0.1]
frutas

var agregarFrutas = frutas.push("Guineo"); //Agregar un elemento al final de Array
frutas

var ultimo = frutas.pop("Uvas") //Elimina el ultimo valor
frutas

var agregarFrutasPLinea = frutas.unshift("Guineo");
frutas

var borrarFrutasPlinea = frutas.shift();
frutas

var posicio = frutas.indexOf(0.1);//* *//
posicio

var estudiantes = ["Heriberto", "Elizabeth", "Glenny", "Leidy"]
estudiantes

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for(i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i])
}

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

while (estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}

6 === "6"

//Objeto
var miAuto = {
    nombre: "Toyota",
    modelo: "Corolla",
    anno: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anno}`);
    }
}

miAuto.detalleDelAuto();


// Contructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Toyota", "Corolla", 2020)

autoNuevo










