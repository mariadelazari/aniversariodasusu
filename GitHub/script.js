// Contagem regressiva
const dataEvento = new Date('2025-06-22T00:00:00').getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerText = `${dias} dias restantes!`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Confirmação de presença
document.getElementById('form-rsvp').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let quantidade = document.getElementById('quantidade').value;
    let mensagem = document.getElementById('mensagem').value;

    let lista = document.getElementById('lista-convidados');
    lista.innerHTML += `<p><strong>${nome}</strong> confirmou presença com ${quantidade} pessoa(s). <br> Mensagem: "${mensagem}"</p>`;

    document.getElementById('form-rsvp').reset();
});
