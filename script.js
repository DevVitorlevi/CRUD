const apiURL = 'http://localhost:3000/produtos';

document.addEventListener('DOMContentLoaded', CarregarProdutos)//ira carregar os produtoos

var form = document.getElementById('produto-form')
const nomeInput = document.getElementById('name')
const precoInput=document.getElementById('preco')
const descricaoInput = document.getElementById('descricao')
const produtoIdInput = document.getElementById('produto-id')
const submitBtn = document.getElementById('btn-s')
const resetBtn= document.getElementById('reset')
const tabelaCorpo =document.querySelector('#p-tabela tbody')

function CarregarProdutos(){
    fetch(apiURL) .then(response => response.json).then(produto =>{
        tabelaCorpo.innerHTML=''
        produto.forEach(produto => {
            adicionarProdutoNaTabela(produto)
        })
    }).catch(function(error){ 
        console.log(`Erro ao Carregar ${error}`)
    })
}
function adicionarProdutoNaTabela(produto){
    const row = document.createElement('tr')
    row.innerHTML =`
    <td>${produto.id}</td>
    <td>${produto.nome}</td>
    <td>${produto.preco}</td>
    <td>${produto.descricao}</td>
    <td>
        <button class="action-btn edit-btn" onclick="editarProduto(${produto.id})">Editar</button>
        <button class="action-btn delete-btn" onclick="deletarProduto(${produto.id})">Excluir</button>
    </td>`
    tabelaCorpo.appendChild(row)
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const produto ={
        nome: nome.Input.value,
        preco: parseFloat(precoInput.value),
        descricao:descricaoInput.value
    }

    const produtoId = produtoIdInput.value

    if(produtoId){
        atualizarProduto(produtoId, produto)
    }else{
        cadastrarProduto(produto)
    }
})

function cadastrarProduto(produto){
    
}