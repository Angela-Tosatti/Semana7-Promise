// 2 - Crie um sistema de carregamento de tela para indicar ao usuário que a página está carregando. Crie uma interface de carregamento, pode ser uma mensagem de texto, uma representação visual como uma barra de carregamento, enfim, utilize sua imaginação. Utilize uma promessa para indicar quando o carregamento dos recursos foi finalizado com sucesso, atualizando a interface com uma nova representação visual, ou uma outra interface da sua escolha.

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('carregando')
    }, 5000);

}).then(resultado => {
    document.getElementById('carregando').innerHTML = '<img src="100.png">' + '<br>' + "Done!!"
    console.log(resultado)
}).catch(erro => {
    document.getElementById('carregando').innerHTML = "ERRO!!"
});