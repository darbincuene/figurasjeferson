  class Rectangulo {

    base: number
    altura: number




    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
        


    }

    getBase() {
        return this.base

    }
    setBase(base: number) {
        this.base = base

    }
    getAltura() {
        return this.altura
    }
    setAltura(altura: number) {
        this.altura = altura

    }

    calcularArea(): number {
        return this.base * this.altura
     }
     
calcularPerimetro(): number {
        
    return 2 * (this.base + this.altura);
}

}




const miRectangulo = new Rectangulo(5, 10);


console.log("Área del rectángulo:", miRectangulo.calcularArea());


console.log("Perímetro del rectángulo:", miRectangulo.calcularPerimetro());