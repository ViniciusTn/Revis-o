//1. Somador de Números  
//Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. A cada novo número digitado, o valor deve ser acumulado. Ao final, exiba o resultado total da soma.

let total = 0;
let quantidade = parseInt(prompt("Quantos números deseja somar? "));

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    total += numero;
}

console.log(`O total da soma é: ${total}`);



//2. Contagem Regressiva da NASA  
//Simule uma contagem regressiva para o lançamento de um foguete, partindo de 10 até 0, e ao final exiba a mensagem "Lançamento!".  
//Dica: estude a função `setInterval()` do JavaScript.

function contagemRegressiva(){
    let intervalo = setInterval(contagem, 1000);
    let regressiva = 10
    function contagem(){
        if(regressiva > 1){
        console.log(regressiva);
        regressiva--;            
        }else{
              console.log('lançamento');
            clearInterval(intervalo);

        }
    }
}
contagemRegressiva();


//3. Balanço Financeiro Anual  
//Crie um algoritmo que solicite o ganho bruto e os gastos mensais de uma empresa durante os 12 meses do ano. Ao final, exiba:  
//- Total de ganhos  
//- Total de gastos  
//- Saldo final  
//- E uma mensagem informando se a empresa teve lucro ou prejuízo no ano

let ganhoBruto = prompt('qual foi o gaho bruto da empresa')
let gastosMensais = prompt('quais foram os gastos mensais da empresa')

function balancoFinanceiro (ganhoBruto, gastosMensais){
    let totalGanho = (ganhoBruto *  12);
    let totalGasto = (gastosMensais * 12);
    let saldoFinal = (totalGanho - totalGasto);

    if(totalGasto >= saldoFinal){
        console.log(' o saldo final é ' + saldoFinal);
        console.log(' a empresa teve prejuiso no final do ano');
 }

     else{
        console.log(' o saldo final é ' + saldoFinal);
        console.log(' a empresa teve lucro no final do ano');
 }
     }

     balancoFinanceiro(ganhoBruto,gastosMensais)
