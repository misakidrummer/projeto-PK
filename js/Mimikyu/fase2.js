function validar(resposta) {
    var count = 0;
    var respostas = ['a', 'b', 'c', 'd'];
    
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
        var resposta = prompt('Agora vamos ver o outfit fofo e assustador de Kyu pessoal!').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'c') {

                alert('Meu Deus que fofo e assustador! A platéia está gostando de Kyu! continue assim meu amigo!');
                window.location.href ='fase2.html'
                break;

            } else {

                alert('Ah não... Os outros participantes tomaram a liderança...');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('Hey por favor, leve isso a sério!');
        };
    };
};