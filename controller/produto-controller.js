const consulta = require('./consulta');
module.exports = (connection)=>{
    consulta.connection(connection);
    var controller;

    controller = {
        get: async function (req, res, next){
            var result = await consulta.execQuery("select * from produto");
            for(i of result){
                i.projfotos = JSON.parse(i.projfotos);
            }
            console.log(result)
            res.render('produtos-vitrine', {produtos: result});
        },

        post: async function(req, res, next){
            
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
