
var saldo = 1500;


function login() {
    var nome = prompt("Informe o seu usuário:")
    var x_senha = prompt("Informe a sua senha:")

    if (senha(nome, x_senha)) {
        alert("Olá " + nome + "," + " é um prazer ter você conosco por aqui! ")
        inicio();
    } else {
        alert("Usuário ou senhas inválidos...");
        login();
    }
}

function senha(usuario, senha) {
    if (usuario == 'Gabriel' && senha == '3589') {

        return true;

    } else {
        return false;
    }
}


function inicio() {

    var escolha = parseInt(prompt('Selecione uma das opções para prosseguir: 1-) Saldo 2-) Extrato 3-) Saque 4-) Depósito 5-) Transferência 6-) Sair '));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;

        case 2:
            ver_extrato();

        case 3:
            fazer_saque();
            break;

        case 4:
            fazer_deposito();
            break;

        case 5:
            fazer_tranferencia();
            break;

        case 6:
            sair();
            break;

    }
}

function ver_saldo() {
    var senha = parseFloat(prompt('Informe a senha:'))
    if (senha == 3589) {
        alert('Seu saldo atual é: ' + saldo);
    } else {
        ver_saldo();
    }
    inicio();
}

function ver_extrato() {
    var senha = parseFloat(prompt('Informe a senha:'))
    if (senha == 3589) {
        alert('| Netflix -R$100,00 | Mercado do Alek -R$300,60 | Spotify -R$30,99 | Pix Recebido +R$100,00 |');
        inicio();
    } else {
        ver_extrato();
    }
}


function fazer_saque() {
    var senha = parseFloat(prompt('Informe a senha:'))
    if (senha == 3589) {
        fazer_saque2();
    } else {
        fazer_saque();
    }
}
function fazer_saque2() {
    var saque = parseFloat(prompt('Qual o valor para o saque?'));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe o valor para o saque.');
        fazer_saque();
    } else if (saldo < saque || saque <= 0) {
        alert('Transação não autorizada.');
        fazer_saque();
    } else {
        saldo = saldo - saque;
        inicio();
    }
}

function fazer_deposito() {
    var senha = parseFloat(prompt('Informe a senha:'))
    if (senha == 3589) {
        fazer_deposito2();
    } else {
        fazer_deposito();
    }
}
function fazer_deposito2() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe o valor.');
        fazer_deposito();
    } else if (deposito <= 0) {
        alert('Transação não autorizada.');
        fazer_deposito();
    } else {
        saldo += deposito;
        inicio();
    }
}

function fazer_tranferencia() {
    var senha = parseFloat(prompt('Informe a senha:'))
    if (senha == 3589) {
        transferencia2();
    } else {
        fazer_tranferencia();
    }
}
function transferencia2() {
    var conta = parseFloat(prompt('Informe o número da conta:'))
    alert('O número da conta está correta? ' + conta);
    var valor = parseFloat(prompt('informe o valor a ser transferido:'))
    if (isNaN(valor) || valor === '') {
        alert('Por favor, informe um número.');
        transferencia();
    } else if (saldo < valor || valor <= 0) {
        alert('Transação não autorizada.');
        fazer_transferencia();
    } else if (saldo >= valor) {
        saldo = saldo - valor;
        inicio();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert('Gabriel, foi um prazer ter você por aqui!')
    } else {
        inicio();
    }
}
login();