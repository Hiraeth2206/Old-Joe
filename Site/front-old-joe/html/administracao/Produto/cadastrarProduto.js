let res = document.getElementById('res')
let cadastrarProduto = document.getElementById('cadastrarProduto')


cadastrarProduto.addEventListener('click', (e) => {
    e.preventDefault()


    let fabricanteId = document.getElementById('fabricanteId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let descricaoProduto = document.getElementById('descricaoProduto').value
    let precoProduto = document.getElementById('precoProduto').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value


    /*------------------------------------------------------------------------------*/


    const dados = {
        fabricanteId: fabricanteId,
        nomeProduto: nomeProduto,
        descricaoProduto: descricaoProduto,
        precoProduto: precoProduto,
        quantidadeProduto: quantidadeProduto,
    }


    fetch('http://localhost:3000/Produto', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            alert('Produto Cadastrado com Sucesso!')
        })
        .catch((err) => {
            console.error("Não foi possível cadastrar o Produto", err)
        })
})
