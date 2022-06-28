/// criando uma calculadora
função calculadora() {
    // definindo as operações e pegando o valor de entrada do usuário
    // usamos "\n" para fazer uma quebra de linha
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    
    // verificando se a operação é válida
    if (!operação || operação >= 7) {
        alert('erro - operação inválida');
        calculadora();
    } senão {
        //definindo variáveis
        // todas as entradas devem ser do tipo number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        deixe resultado;
        // verificando se as variáveis ​​são válidas
        if (!n1 || !n2) {
            alert('erro -parâmetros inválidos');
            calculadora();
        } senão {
            // definindo as funções
            função soma() {
                resultado = n1 + n2;
                // o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisãoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            função potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevação à ${n2}ª potência é ${resultado}`);
                novaOperacao();
            }
            // nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } senão {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    } */

     // escolhendo a operação
    // usand if && else
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisãoReal();
    } else if (operacao == 5) {
        divisãoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } 

 // usando switch case
    switch (operacao) {
        caso 1:
            soma();
            parar;
        caso 2:
            subtracao();
            parar;
        caso 3:
            multiplicacao();
            parar;
        caso 4:
            divisãoReal();
            parar;
        caso 5:
            divisãoInteira();
            parar;
        caso 6:
            potenciacao();
            parar;
    }
}
calculadora(); 