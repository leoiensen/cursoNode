const db = require('./db');

const Pagamento = db.sequilize.define('pagamentos', {
    nome: {
        type: db.Sequilize.STRING
    },
    valor: {
        type: db.Sequilize.DOUBLE
    }
})

//Criando a tabela
//Pagamento.sync({force:true})

module.exports = Pagamento;