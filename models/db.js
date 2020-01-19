const Sequilize = require("sequelize");

const sequelize = new Sequilize('celke', 'celkeone', '123456', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequilize: Sequilize,
    sequilize: sequelize
}