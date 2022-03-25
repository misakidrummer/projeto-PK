function validar(resposta) {
    var count = 0;
    var respostas = ['a', 'b', 'c'];
    
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
        var resposta = prompt('Vamos ver o outfit de Kyu pessoal!').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'c') {

                alert('Meu Deus que fofo! A platéia está gostando da performance do Kyu! continue assim meu amigo!');
                window.location.href ='fase2.html'
                break;

            } else {

                alert('Ah não... Thaynara e Vulpix venceram essa rodada...');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('foco meu amigo!');
        };
    };
};