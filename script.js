//Exercício interpretação 1:
//a) 10 e 50

//b) Nada apareceria no console, pois não há o console.log para fazer a impressão


//Exercício interpretação 2:
//a) A função deixa o texto digitado pelo usuário em caixa-baixa,
//e depois verifica se há "cenoura" no texto

//b) I. true, II. true, III. true

//*******************************************************************************************

//Exercício escrita 1:
//a)
/*
function imprimeInformacoes(){
    console.log("Oi, eu sou o Henri, tenho 17 anos, moro em São Leopoldo e sou estudante.");
}

imprimeInformacoes()

//b)
function perguntaDados(){
    let nome = prompt("Digite o seu nome: ")
    let idade = parseInt(prompt("Digite a sua idade:"))
    let cidade = prompt("Digite a sua cidade: ")
    let profissao = prompt("Digite a sua profissão: ")
    alert(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

perguntaDados()


//Exercício escrita 2:
//a)
function somarNumeros(num1, num2) {
    return num1 + num2;
  }
num1 = parseFloat(prompt("Insira um número: "))
num2 = parseFloat(prompt("Insira mais um número: "))
console.log(somarNumeros(num1, num2));


//b)
function maiorOuMenor(num1, num2){
    return num1 >= num2;
}
num1 = parseFloat(prompt("Insira um número: "))
num2 = parseFloat(prompt("Insira mais um número: "))
console.log(maiorOuMenor(num1, num2));


//c)
function parOuNao(numero){
    return numero % 2 === 0
}
let numDigitado = parseInt(prompt("Insira um número: "))
console.log(parOuNao(numDigitado))


//d)
function imprimirMensagem(mensagem) {
    let tamanho = mensagem.length;
    let maiuscula = mensagem.toUpperCase();
    console.log(`Tamanho da mensagem: ${tamanho}, mensagem em letras maiúsculas: ${maiuscula}`);
}

let mensagem = prompt("Digite alguma mensagem")
imprimirMensagem(mensagem)


//Exercício escrita 3:
//Soma
function somarDois(num1, num2){
    return num1 + num2
}

//Subtrai
function subtrairDois(num1, num2){
    return num1 - num2
}

//Multiplica
function multiplicarDois(num1, num2){
    return num1 * num2
}

//Divide
function dividirDois(num1, num2){
    return num1 / num2
}
num1 = parseFloat(prompt("Insira um número: "))
num2 = parseFloat(prompt("Insira mais um número: "))

console.log("Soma:", somarDois(num1, num2));
console.log("Subtração:", subtrairDois(num1, num2));
console.log("Multiplicação:", multiplicarDois(num1, num2));
console.log("Divisão:", dividirDois(num1, num2));



//Desafios

const imprimeSoma = (imprimir) => {
    const somador = (num1, num2) => {
        return num1 + num2
    }
    return imprimir = console.log(somador(num1, num2))
}
num1 = parseFloat(prompt("Insira um número: "))
num2 = parseFloat(prompt("Insira mais um número: "))
console.log(imprimeSoma())
*/

function calculaPitagoras(catetoA, catetoB){
    const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2)
    return hipotenusa
}
let catetoA = parseFloat(prompt("Digite o valor do cateto A: "))
let catetoB = parseFloat(prompt("Digite o valor do cateto B: "))
hipotenusa = calculaPitagoras(catetoA, catetoB)

console.log('A hipotenusa é: ' + hipotenusa)