class Rombo{
    ladomayor: number
    ladomenor: number
    
    constructor(ladomayor: number, ladomenor: number) {
        this.ladomayor = ladomayor
        this.ladomenor = ladomenor

    }

    setladomayor(ladomayor: number) {
        this.ladomayor =ladomayor
    }
    getladomayor() {
        return this.ladomayor
    }

    setladomenor(ladomenor: number) { 
        this.ladomenor =ladomenor
    }

    getladomenor() {
        return this.ladomenor
    }

    //metodos

    calculararea() {
        return (this.ladomayor * this.ladomenor)/2
        
    }
    calcularperimetro(lado: number): number{
        return lado * 4
     }

}

let rombo = new Rombo(10, 6);


console.log("el area del rombo es :", rombo.calculararea())

console.log("el perimetro del rombo es :", rombo.calcularperimetro(20))