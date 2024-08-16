q1
let a = [1, 60, 232, 7, 25, 76, 29,74, 92];
const lista = a.filter(num => num > 60 && num < 300);

let somatorio = 0;

lista.forEach(element => {
    somatorio += element 
}); 

console.log("A lista dos valores maiores que 60 é: " + lista + ". A soma dos elementos da lista é: " + somatorio)
