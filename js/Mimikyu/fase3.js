function validar(resposta) {
    var count = 0;
    var respostas = ['a', 'b', 'c',];
    
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
        var resposta = prompt('Agora para nosso último participante, vamos ver sua dança!').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'c') {

                alert('Aí meu deuss, essa foi a coisa mais fofa do mundo, meio cringe você dançando mas tudo bem, oque importa é que o pessoal Amou hahaha');
                window.location.href ='youwin.html'
                break;

            } else {

                alert('Ah não... Verônica e umbreon venceram essa rodada');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('Hey por favor, leve isso a sério :< você está quase lá!');
        };
    };
};