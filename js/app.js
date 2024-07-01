let TotalGeral;
limpar();

function adicionar(){
let produto = document.getElementById("produto").value;
let quantidade = document.getElementById("quantidade").value;
//Verificar se o produto selecionado e válido
if(!produto || produto.trim() === ""){
    alert("Selecione um produto válido.");
    return
}
//Verificar quantidade inserida e válida
if(isNaN(quantidade)|| quantidade <= 0){
    alert("Insira uma quantidade válida.")
    return
}

let nomeProduto = produto.split("-")[0];
let valorUnitario = produto.split("R$")[1];
let preco = quantidade * valorUnitario;

//adicionar no carrinho 
let carrinho = document.getElementById("lista-produtos");
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
</section>`
//atualizar o valor total
TotalGeral = TotalGeral + preco;
let campoTotal = document.getElementById("valor-total");
campoTotal.textContent =`R$ ${TotalGeral}`;
document.getElementById("quantidade").value = 0;
}

function limpar(){
    TotalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = " ";
    document.getElementById("valor-total").textContent = "R$ 0";
}