//importando o módulo HTTP
const http = require('http');


//Configurando as informações do servidor
const hostname = '128.0.1.1';
const port = 3000;


//Criando servidor usando função com nome diferente
const meuServidor = http.createServer((req,res)=> {



//Configurando o cabeçalho de respostas
res.statusCode = 200;
res.setHeader('Content-type', 'text/plain');

//enviando mensagem de resposta
res.end('Bem vindos ao server inicial 1!!/n');

});

//iniciando o servidor e escutando na porta especificada
meuServidor.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});