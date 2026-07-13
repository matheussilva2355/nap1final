document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Capturando os novos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagemTexto = document.getElementById('mensagem').value;

    // Exemplo de validação simples
    if (nome.trim() === "" || email.trim() === "") {
        alert("Por favor, preencha os campos obrigatórios (Nome e E-mail)!");
    } else {
        console.log("Dados enviados:", { nome, email, telefone, mensagemTexto });
        alert("Enviado com sucesso, " + nome + "!");
    }
});
