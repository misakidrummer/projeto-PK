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
        var resposta = prompt('Prof Nathi: E então meu amigo? Oque você tem a dizer?').toLowerCase();
        var valida = validar(resposta);

        if (valida) {

            if (resposta == 'a') {

                alert('Você conseguiu amigo! as crianças com certeza mudaram de opinião sobre os Bidoof e tenho certeza que irão espalhar esse conhecimento!');
                window.location.href ='youwin.html'
                break;

            } else {

                alert('Prof Nathi: Ops, isso não deveria ter acontecido, as crianças estão do lado do Joey agora');
                count++
            }

            if (count > 3) {
                window.location.href = 'YouLost.html';
                break
            };

        } else {
            alert('Joey: Hah você é tão patético quanto esse Bibarel!');
        };
    };
};