abstract class Animal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract hacerSonido(): void;

    moverse(): void {
        console.log(`${this.nombre} se está moviendo`);
    }
}

class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log(`${this.nombre} dice: Guau guau`);
    }

    private ladrar(): void {
        console.log("Ladrando...");
    }

    public mostrarLadrido(): void {
        this.ladrar();
    }

    static tipo: string = "Canino";

    static mostrarTipo(): void {
        console.log(`Tipo: ${Perro.tipo}`);
    }
}

class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log(`${this.nombre} dice: Miau miau`);
    }

    private maullar(): void {
        console.log("Maullando...");
    }

    public mostrarMaullido(): void {
        this.maullar();
    }

    static tipo: string = "Felino";

    static mostrarTipo(): void {
        console.log(`Tipo: ${Gato.tipo}`);
    }
}

function hacerSonidosDeAnimales(animales: Animal[]): void {
    animales.forEach(animal => {
        animal.hacerSonido();
        animal.moverse();
    });
}

const miPerro = new Perro("Rex");
const miGato = new Gato("Mimi");

const animales: Animal[] = [miPerro, miGato];

hacerSonidosDeAnimales(animales);

miPerro.mostrarLadrido();
miGato.mostrarMaullido();

Perro.mostrarTipo();
Gato.mostrarTipo();