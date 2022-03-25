function validar(resposta) {
    var count = 0;
    var respostas = ['a', 'b','c',];
    
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
        var resposta = prompt('Gary: E então? Qual sua resposta Ash?').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'c') {

                alert('O-oque? Você acertou de novo?? Grrrr...Já chega, vamos resolver isso como treinadores, Eu te desafio para uma batalha Pokémon!');
                window.location.href ='fase3.html'
                break;

            } else {

                alert('Hah que patético Ash!');
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