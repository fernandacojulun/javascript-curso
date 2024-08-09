class Carro {
    // Atributos de la clase
    #marca; // Campo privado
    #modelo; // Campo privado
    #año; // Campo privado
    static cantidadCarros = 0; // Atributo estático
  
    // Constructor de la clase
    constructor(marca, modelo, año) {
      this.#marca = marca;
      this.#modelo = modelo;
      this.#año = año;
      Carro.cantidadCarros++; // Incrementar el contador estático al crear un nuevo carro
    }
  
    // Método para obtener la descripción del carro
    obtenerDescripcion() {
      return `${this.#marca} ${this.#modelo} (${this.#año})`;
    }
  
    // Método para calcular la antigüedad del carro
    calcularAntigüedad() {
      const añoActual = new Date().getFullYear();
      return añoActual - this.#año;
    }
  
    // Método para actualizar el año del carro
    actualizarAño(nuevoAño) {
      if (nuevoAño > this.#año) {
        this.#año = nuevoAño;
      } else {
        console.log("El nuevo año debe ser mayor al año actual del carro.");
      }
    }
  
    // Método estático para mostrar la cantidad total de carros creados
    static mostrarCantidadCarros() {
      return `Cantidad total de carros creados: ${Carro.cantidadCarros}`;
    }
  }
  
  // Crear instancias de la clase Carro
  const carro1 = new Carro("Toyota", "Corolla", 2015);
  const carro2 = new Carro("Honda", "Civic", 2018);
  
  // Uso de métodos de instancia
  console.log(carro1.obtenerDescripcion()); // Salida: "Toyota Corolla (2015)"
  console.log(carro1.calcularAntigüedad()); // Salida: "9" (suponiendo que es el año 2024)
  carro1.actualizarAño(2020);
  console.log(carro1.obtenerDescripcion()); // Salida: "Toyota Corolla (2020)"
  
  // Uso de métodos estáticos
  console.log(Carro.mostrarCantidadCarros()); // Salida: "Cantidad total de carros creados: 2"
  