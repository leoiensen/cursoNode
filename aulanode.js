/*console.log("Gerenciador Financeiro");

var client = "Leo Iensen";

console.log("Cliente: " + client);

var valProduct = 100; 
var valDiscount = 37; 

var discountFunc = require("./modules/calDiscount");

var finalValue = discountFunc(valProduct,valDiscount);

console.log("Valor final do produto: R$" + finalValue);

var http = require('http');
//criando o servidor
http.createServer(function(req,res){
    //pagina do navegador
    res.end("Gerenciador Financeiro");
}).listen(8080); //indicando a porta do servidor

//incluindo o modulo express(cria e gerencia rotas do navegador)
const express = require("express");

//inicializando
const app = express();

//rotas express
app.get("/", function(req, res){
    //carregando arquivo html
    res.sendFile(__dirname + "/src/index.html");
})

app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
})

app.get("/blog", function(req,res){
    res.send("Pagina Blog");
})

app.get("/contato", function(req,res){
    res.send("Pagina de Contato");
})

//iniciando o servidor
app.listen(8080);

//Coneção com o BD MySql 
const mysql = require('mysql');

//Criando a coneção
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'celkeone',
    password: '123456',
    database: 'celke' 
});

connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com DB: ' + err.stack); 
    return;
});

//Excluindo os dados do DB 
connection.query("DELETE FROM users WHERE id = 3", function(err, result){
    if (!err) {
        console.log('Usuario excluido com sucesso O:');
    }else {
        console.log('Erro ao excluir o usuario :C')
    }
});

//Editando os dados do DB
connection.query("UPDATE users SET nome = 'Camilla' WHERE id = 2", function(err, result){
    if (!err) {
        console.log('Usuario alterado com sucesso C:');
    }else {
        console.log('Erro ao alterar o usuario :C')
    }
});


//Inserindo dados no DB
connection.query("INSERT INTO users(nome, email) VALUES ('Arashi', 'arashi@deadinside.com')", function(err, result){
    if (!err) {
        console.log('Usuario cadastrado com sucesso C:');
    }else {
        console.log('Erro ao cadastrar o usuario :C')
    }
})


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  //Realizando consulta 
  connection.query('SELECT * FROM users', function(err, rows, fields){
      if(!err) {
          console.log("Resultado: ", rows);
      }else {
          console.log("Erro ao realizar a consulta :C");
      }

  })

//Coneção com o BD MySql 
const mysql = require('mysql');

//Criando a coneção
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'celkeone',
    password: '123456',
    database: 'celke' 
});

connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com DB: ' + err.stack); 
    return;
});

const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'celkeone', '123456', {
    host: 'localhost',
    dialect: 'mysql' 
});

sequelize.authenticate().then(function() {
    console.log('Conexao realizada com sucesso C:');
}).catch(function(err) {
    console.log('Erro, conexao não realizada :C' + err);
});

const Pagamento = sequelize.define('pagamentos', {
// attributes
nome: {
    type: Sequelize.STRING,
},
valor: {
    type: Sequelize.DOUBLE
}
});

//Criar tabela com Sequelize
//User.sync({force: true});

//Inserir registro no banco de dados
Pagamento.create({
    nome: "Energia",
    valor: 220
})*/