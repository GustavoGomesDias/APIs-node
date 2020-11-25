const app = require('../src/app');

const http = require('http');

const debug = require('debug')('nodestr:server'); // O segundo '()' é o nome do debug

/* Passa a porta e caso não de certo, envia a porta como 3000 */
const port = normalizePort(process.env.POT || 3000);

app.set('port', port) /* Porta setada */
const server = http.createServer(app);

server.listen(port); // Fica ouvindo a API
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

/* Função para ver se há portas disponíveis */
function normalizePort(val){
    const port = parseInt(val, 10); //Converte pra inteiro

    if(isNaN(port)){
        return val; // Se n for um número, retorna 10.
    }

    if(port >= 0){
        return port; // Se >= 0, retorna a porta
    }

    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Pipe ' + port;
    switch(error.code){
        case 'EACCES':
            // Erro de permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case "EADDRINUSE":
            // Erro de endereço em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
    // Tem mais na lista do node e nós definimos o erro que queremos tratar.
}

/* Pega as infos do serve e starta o debug */
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'pipe ' + addr.port;
    debug('Listening on ' + bind);
}