const fsp = require('fs').promises;

(async () => {
    const p1 = fsp.readFile('./topico3/ex1.txt', 'utf-8');
    const p2 = fsp.readFile('./topico3/ex2.txt', 'utf-8');
    const dados = await Promise.all([p1, p2]);    
    console.log(dados);  // dados eh um array
})();

// executar 