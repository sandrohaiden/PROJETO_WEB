const consulta = require('./consulta');
module.exports = (connection)=>{
    consulta.connection(connection);
    var controller;

    controller = {
        get: async function (req, res, next){
            var result = await consulta.execQuery('select * from categoria where catsupercategoria is null');
            for(i of result){
                i.sub = await consulta.execQuery('select * from categoria where catsupercategoria = ?', [i.catcodigo]);
                console.log(i.sub)
            }
            console.log(result);
            res.render('admin/produto-cadastro', {cat: result});
        },

        post: (req, res, next)=>{
            console.log(req.files)  
            res.send('ok');
        }
    }

    return controller;
}
