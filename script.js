//1. Somador de Números  
//Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. A cada novo número digitado, o valor deve ser acumulado. Ao final, exiba o resultado total da soma.

let total = 0;
let quantidade = parseInt(prompt("Quantos números deseja somar? "));

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    total += numero;
}

console.log(`O total da soma é: ${total}`);



