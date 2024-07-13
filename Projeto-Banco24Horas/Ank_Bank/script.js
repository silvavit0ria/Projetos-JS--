
document.addEventListener('DOMContentLoaded', function() {
    
            

            let extrato = document.querySelector('.extrato');
            let depositar = document.getElementById('depositar');
            let saque = document.getElementById('saque');
            let consultar = document.getElementById('consultar');
            let encerrar = document.getElementById('encerrar');
            let botaoSair = document.getElementById('sair');
            let saldoBanco = localStorage.getItem('saldoBanco') ? parseFloat(localStorage.getItem('saldoBanco')) : 0;
            let boasVindas = document.querySelector('.boasVindas');
            let nome = localStorage.getItem('nome');
            let sobrenome = localStorage.getItem('sobrenome');
            
            function atualizarSaldo() {
                localStorage.setItem('saldoBanco', saldoBanco.toString());
            }
            
            
            
            function atualizarExtrato(mensagem) {
                extrato.innerHTML += `<p>${mensagem}</p>`;
            }
            
            
            
            depositar.addEventListener('click', function () {
                let deposito = parseFloat(document.getElementById('valor').value);
                if (deposito > 0) {
                    saldoBanco += deposito;
                    atualizarSaldo();
                    alert(`Depositou : R$ ${deposito.toFixed(2)}`);
                    atualizarExtrato(`Depositou : R$${deposito.toFixed(2)} `);
                } else {
                    alert("Valor de depósito inválido.");
                }
            });
            saque.addEventListener('click', function () {
                let saqueValor = parseFloat(document.getElementById('valor').value);
                if (saqueValor > 0 && saldoBanco >= saqueValor) {
                    saldoBanco -= saqueValor;
                    alert(`Sacou : R$${saqueValor.toFixed(2)}`);
                    atualizarExtrato(`Sacou: R$${saqueValor.toFixed(2)}`);
                } else {
                    alert("Valor de saque inválido ou saldo insuficiente.");
                    atualizarExtrato(`Tentativa de saque inválida`);
                }
            });
            consultar.addEventListener('click', function () {
                alert(`Seu saldo atual é ${saldoBanco.toFixed(2)}`);
                atualizarExtrato(`Seu saldo atual é ${saldoBanco.toFixed(2)}`);
            });
            encerrar.addEventListener('click', function () {
                atualizarSaldo();
                atualizarExtrato(`Você selecionou ENCERRAR! Atendimento encerrado.`);
            });

            boasVindas.innerHTML = `<p>Olá <strong> ${nome} ${sobrenome}! </strong> </p>`;
        
        });