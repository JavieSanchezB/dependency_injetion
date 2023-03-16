class Cerveza{
    constructor(nombre, alcohol,marca){
        this.nombre = nombre;
        this.alcohol = alcohol;
        this.marca = marca;
    }
    
}


class Cantinero {
    constructor(nombre, cerveza) {
        this.nombre = nombre;
        this.cerveza = cerveza;
    }
    servir(){
        console.log(`${this.nombre} sirviendo la cerveza ${this.cerveza.marca} Porcentaje de Alcohol ${this.cerveza.alcohol}%`)
    }
}

let cantinero = new Cantinero("Pedro",new Cerveza("Aguila",20,"Bavaria"));
cantinero.servir();