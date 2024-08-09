class persona {
    cui
    nombre
    apellido
    fecha_nacimiento
    genero
    estatura

    constructor(cui, nombre, genero){
        this.cui = cui
        this.nombre = nombre
        this.genero = genero
        this.saludar()
    }

    constructor(){
    }

    saludar() {
        console.log("Hola me llamo ", this.nombre)
    }

    //parametros
    velocidad(distancia, tiempo) {
        const vel = distancia / tiempo;
        return vel;
    }

    static saltar(){
        console.log("La persona salta");
    }
}

let ayudante = new persona(1010101010);