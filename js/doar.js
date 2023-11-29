document.getElementById('formDoar').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeInput').value;
    const idade = document.getElementById('idadeInput').value;
    const raca = document.getElementById('racaInput').value;
    const descricao = document.getElementById('descricaoInput').value;

    const dadosDoFormulario = {
        name: nome,
        age: idade,
        type: raca,
        description: descricao,
    };

    console.log('Dados do formulário:', dadosDoFormulario);

    fetch('http://localhost:3333/pets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosDoFormulario),
    })
    .then(response => response.json())
    .then(data => {
        alert('Sucesso ao enviar dados:', data);
    })
    .catch(error => {
        alert('Erro ao enviar dados:', error);
    });
});