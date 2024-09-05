const valor1 = prompt("Informe o primeiro número")
const valor2 = prompt("Informe o segundo número")

const x = parseFloat(valor1)
const y = parseFloat(valor2)

const soma = x + y
const subtracao = x - y
const multiplicao = x * y
const divisao = x / y

alert(
  "Resultado:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicao +
  "\nDivisão: " + divisao
)