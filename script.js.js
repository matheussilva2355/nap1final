document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    if (nome.length < 3) {
        document.getElementById('mensagem').innerText = "Nome muito curto!";
    } else {
        document.getElementById('mensagem').innerText = "Enviado com sucesso!";
    }
});