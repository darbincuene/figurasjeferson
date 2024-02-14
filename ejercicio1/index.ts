//cuadrado

class cuadrado{
    private _lado:number

    //contrusctor
    constructor(lado:number){
        this._lado = lado
    }

    //geters y setters

    get lado (){
        return this._lado
    }
    set lado(valor:number){
        this._lado = valor
    }
     //metodos para calcular el area

    calculararea(){
        return this._lado * this._lado
    }
    calcularperimetro(){
        return 4 * this._lado
    }
}

let Cuadrado = new cuadrado(5);

//console.log("el area del cuadrado: " , Cuadrado.lado)
console.log("el area del cuadrado es : ",Cuadrado.calculararea())
console.log("el perimetro del cuadrado: " , Cuadrado.calcularperimetro())

