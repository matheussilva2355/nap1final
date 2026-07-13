document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagemStatus = document.getElementById('mensagem-status');
    
    // Validação simples
    if (nome.trim() === "" || email.trim() === "") {
        mensagemStatus.innerText = "Por favor, preencha os campos obrigatórios!";
    } else {
        mensagemStatus.innerText = "Enviado com sucesso, " + nome + "!";
    }
});
