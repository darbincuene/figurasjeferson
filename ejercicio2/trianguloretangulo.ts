class triangulorectangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  setBase(base: number) {
    this.base = base;
  }
  set Altura(altura: number) {
    this.altura = altura;
  }

  getBase() {
    return this.base;
  }

  getAltura() {
    return this.altura;
  }

  //metodos

  area(): number {
    return (this.base * this.altura) / 2;
  }

  perimetro(): number {
    const hipotenusa = Math.sqrt(this.base ** 2 + this.altura ** 2);
    return this.base + this.altura + hipotenusa;
  }

  hipotenusa(): number {
    return Math.sqrt(this.base ** 2 + this.altura ** 2);
  }

  tipoTriangulo(): string {
    if (this.base === this.altura) {
      return "isosceles";
    } else if (this.base !== this.altura && this.base * this.altura !== 0) {
      return "Escaleno";
    } else {
      return "equilatero";
    }
}
    
    
    
}

const triangulo = new triangulorectangulo(0, 1);

console.log("el area es :", triangulo.area())
console.log("el perimetro es :", triangulo.perimetro())
console.log("la hipotenusa es :", triangulo.hipotenusa())
console.log("el tipo de triangulo es :", triangulo.tipoTriangulo())


