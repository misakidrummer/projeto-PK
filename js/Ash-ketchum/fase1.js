function validar(resposta) {
    var count = 0;
    var respostas = ['a', 'b',];
    
    while (count < respostas.length) {
        if (resposta == respostas[count]) {
            return true;
        } else {
           count ++
        }
    }

    return false;
};

function main() {
    var count = 1;

    while (true) {
        var resposta = prompt('Gary: E então? Qual sua resposta?').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'b') {

                alert('O-oque? Você acertou?');
                window.location.href ='fase2.html'
                break;

            } else {

                alert('Hah que patético!');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('Responda direito Noob!');
        };
    };
};