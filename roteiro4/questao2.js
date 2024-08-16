const parametrosPa = {
    id: Number, 
    nome: String,
    n:2 , //termo
    a1:2, // 1o termo
    e:2 //razão
}

const parametrosPg = {
    id: Number, 
    nome: String,
    n:4 , //termo
    a1:2, // 1o termo
    e:2 // razão
}
const termosPA = []
let somaPA = 0
const pA = ( {n, a1, e} = parametrosPa) => {

    for (i = 1; i <= n; i++){
        let element = a1 + (i - 1) * e
        somaPA += element
        termosPA.push(element)
    }
    console.log("Termos da PA: " + termosPA)
    console.log("Somatório: " + somaPA)
}
const termosPG = []
let somaPG = 0
const pG = ({n, a1, e} = parametrosPg) => {
    for (i = 1; i <= n; i++){
        let element = a1 * (e**(i-1))
        somaPG += element
        termosPG.push(element)
    }
    console.log("Termos da PG: " + termosPG)
    console.log("Somatório: " + somaPG)

}

pA(parametrosPa)
pG(parametrosPg)

