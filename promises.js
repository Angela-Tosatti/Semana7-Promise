// 1 - Escreva uma função chamada espereNSegundos(), que obedece as premissas abaixo:
// Recebe um numero inteiro como parametro;
// Retorna uma promessa;
// Se o número não for inteiro (ex: 1,5) reject a promessa com uma mensagem de erro;
// Espere a quantidade de segundos indicada, e então resolve com sucesso a promessa;

function espereNSegundos(numInteiro) {
    return new Promise(function (resolve, reject) {
        if (Number.isInteger(numInteiro)) {
            setTimeout(() => resolve('Resolvido!'), numInteiro * 1000)
        } else {
            reject('Ocorreu um erro!')
        }
    })
}
espereNSegundos(2.4)
    .then(function (resultado) {

        console.log(resultado);
    })
    .catch(function (erro) {
        console.log((erro));
    })