const somaPares = (x) => {
    if (x % 2 !== 0){
        x += 1
    }
    const a = Array.from({length: 5}, (j,i) => x + i *2);
    const soma = a.reduce((num1, num2) => num1+num2, 0);
    console.log("Entrada: " + x + "=> Saída: "+ soma);
}
somaPares(4)
somaPares(11)

