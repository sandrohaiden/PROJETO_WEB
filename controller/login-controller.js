const consulta = require('./consulta');
module.exports = (connection) => {
    consulta.connection(connection);
    var controller;

    controller = {
        get: async function (req, res, next) {
            res.render('login', {});
        },
        post: async function (req, res, next) {
            var sql = "SELECT * FROM usuario " +
                "INNER JOIN tipo ON usutipcodigo = tipcodigo " +
                "WHERE usucpf = ? AND ususenha = ? AND tipdescricao = ?";
            var body = req.body;
            var result = await consulta.execQuery(sql, [body.cpf, body.senha, body.tipo]);
            res.json(result[0]);
        }
    }

    return controller;
}
