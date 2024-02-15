class Trapecio{
    basemayor: number;
    basemenor :number;
    altura:number;
    lado1:number;
    lado2:number;
    constructor(basemayor: number, basemenor: number, altura: number, lado1: number, lado2: number) {
       this.basemayor = basemayor;
       this.basemenor = basemenor;
       this.altura = altura;
       this.lado1 = lado1;
       this.lado2 = lado2; 
    }

    setBasemayor(basemayor: number){
     this.basemayor = basemayor;
    }
    getBasemayor(){
return this.basemenor;

    }
setBasemenor(basemenor: number){
    this.basemenor = basemenor;
}

getBasemenor(){
    return this.basemenor;
}

setAltura(altura: number){
    this.altura = altura;
}
getAltura(){
    return this.altura;
}
setLado1(lado1: number){
this.lado1 = lado1;

}
getLado1(){
    return this.lado1;

}
setLado2(lado2: number){
    this.lado2 = lado2;
}
getLado2(){
    return this.lado2;
}

calcularArea(): number {
    return ((this.basemayor + this.basemenor) * this.altura) / 2;
}

calcularPerimetro(): number {
    return this.basemayor + this.basemenor + this.lado1 + this.lado2;
}


}
const trapecio = new Trapecio(6, 4, 5,2,3);

console.log("Área del trapecio:", trapecio.calcularArea());
console.log("Area del perimetro:", trapecio.calcularPerimetro());


