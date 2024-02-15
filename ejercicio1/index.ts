class Circulo {
 radio: number;

constructor(radio: number) {
this.radio = radio;
    }

    SetcalcularArea(): number {
        return Math.PI * Math.PI*this.radio;
    }

    getcalcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

const radio: number = 100;
const circulo: Circulo = new Circulo(radio);
const area: number = circulo.SetcalcularArea();
const perimetro: number = circulo.getcalcularPerimetro();

console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);
