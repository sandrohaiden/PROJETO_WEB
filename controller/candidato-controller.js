const consulta = require('./consulta');
module.exports = (connection)=>{
    consulta.connection(connection);
    var controller;

    controller = {
        get: async function (req, res, next){
            res.render('candidato', {});
        },

        post: async function(req, res, next){
            var body = req.body;
            console.log(req.files);
            var dados = [body.cpf, body.nome, body.mensagem];
            var sql = 'INSERT INTO candidato(cancpf, cannome, canmensagem, cancurriculo) '+
            'VALUES (?, ?, ?, ?)'
            await consulta.execQuery(sql, dados);
            res.send('OK');    
        },

        getByid: async function(req, res, next){
            var result = await consulta.execQuery("select * from produto where procodigo = ?", [req.params.id]);
            result = result[0];
            result.projfotos = JSON.parse(result.projfotos);
            console.log(result)
            res.render('produto-descricao', {produto: result});
        }
    }

    return controller;
}
