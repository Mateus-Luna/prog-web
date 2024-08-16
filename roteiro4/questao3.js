const notas = (valor =>
    (valor >= 0 && valor <= 4.9)?"D":(valor >= 5 && valor <= 6.9)?"C":(valor >= 7 && valor <= 8.9)?"B":"A"
)

valores = [0, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(valores.map(notas)
)
