inicio = 0
fim = 100
const printPrimos = (inicio, fim) =>{
    if (inicio > fim){
        [inicio, fim] = [fim, inicio]
    }
    const ehPrimo = (num) =>{
        if (num < 2)
            return false;
        for (let i = 2; i <= Math.sqrt(num);i++){
            if (num % i === 0)
                return false;
        }
        return true
    }
    for (let i = inicio; i <= fim; i++){
        if(ehPrimo(i)){
            console.log(i)
        }
    }
}

printPrimos(0,100)
