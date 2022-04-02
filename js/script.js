'use strict';

let somaMussarela = 0;
let somaPortuguesa = 0;
let somaCalabresa = 0;

let vendaMussarela = 0.00;
let vendaPortuguesa = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnFinalizarPedido = document.getElementById('export');


//Eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnFinalizarPedido.addEventListener('click', FinalizarPedido, false);


//Funções
function venda(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
    }
}
























