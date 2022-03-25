function validar(resposta) {
    var count = 0;
    var respostas = ['a', 'b','c', 'd'];
    
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
        var resposta = prompt('Gary: Já venci hehe').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'd') {

                alert('Não é possível... C-como você me derrotou? ...');
                window.location.href ='youwin.html'
                break;

            } else {

                alert('Tch....Eu sabia que você era fraco!');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('Pare de brincar!');
        };
    };
};