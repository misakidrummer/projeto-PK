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
        var resposta = prompt('Prof Nathi: E então meu amigo? Oque você tem a dizer?').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'a') {

                alert('Isso aí amigo! Consigo sentir as crianças abrindo mais suas mentes e mudando de opinião sobre os Bidoof!');
                window.location.href ='fase2.html'
                break;

            } else {

                alert('Ah não... as crianças não parecem estar prestando atenção...');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('Hey! Por favor leve isso a sério :(');
        };
    };
};