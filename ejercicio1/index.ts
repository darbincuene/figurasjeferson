class Circulo {
 radio: number;

constructor(radio: number) {
this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.PI*this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

const radio: number = 5;
const circulo: Circulo = new Circulo(radio);
const area: number = circulo.calcularArea();
const perimetro: number = circulo.calcularPerimetro();

console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);
