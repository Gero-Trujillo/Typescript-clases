"use strict";
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    moverse() {
        console.log(`${this.nombre} se está moviendo`);
    }
}
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    hacerSonido() {
        console.log(`${this.nombre} dice: Guau guau`);
    }
    ladrar() {
        console.log("Ladrando...");
    }
    mostrarLadrido() {
        this.ladrar();
    }
    static mostrarTipo() {
        console.log(`Tipo: ${Perro.tipo}`);
    }
}
Perro.tipo = "Canino";
class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    hacerSonido() {
        console.log(`${this.nombre} dice: Miau miau`);
    }
    maullar() {
        console.log("Maullando...");
    }
    mostrarMaullido() {
        this.maullar();
    }
    static mostrarTipo() {
        console.log(`Tipo: ${Gato.tipo}`);
    }
}
Gato.tipo = "Felino";
function hacerSonidosDeAnimales(animales) {
    animales.forEach(animal => {
        animal.hacerSonido();
        animal.moverse();
    });
}
const miPerro = new Perro("Rex");
const miGato = new Gato("Mimi");
const animales = [miPerro, miGato];
hacerSonidosDeAnimales(animales);
miPerro.mostrarLadrido();
miGato.mostrarMaullido();
Perro.mostrarTipo();
Gato.mostrarTipo();
