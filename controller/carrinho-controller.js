const consulta = require('./consulta');
module.exports = (connection)=>{
    consulta.connection(connection);
    var controller;

    controller = {
        get: async function (req, res, next){
            res.render('carrinho', {});
        }
    }

    return controller;
}
