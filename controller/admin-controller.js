const consulta = require('./consulta');
const slugify = require('slugify');
module.exports = (connection)=>{
    consulta.connection(connection);
    var controller;

    controller = {
        get: async function (req, res, next){
            var result = await consulta.execQuery('select * from categoria');
            console.log(req.body);
            console.log(result);
            res.render('admin/main', {cat: result});
        },

        post: async function(req, res, next){
            console.log(req.body);
            var images = req.files
            for(i of images){
                i.path = i.path.replace('public', '')
            }
            var body = req.body;
            var valor = body.valor;
            valor = valor.replace('R$', '');
            valor = valor.replace(',', '.');
            valor = parseFloat(valor);
            var preco = body.preco;
            preco = preco.replace('R$', '');
            preco = preco.replace(',', '.');
            preco = parseFloat(preco);
            await consulta.execQuery('CALL adicionar_produto(?,?,0,?,?,?,?)',
            [body.produto, body.desc, JSON.stringify(images), valor, preco, body.cat])
            res.send('ok');
        }
    }

    return controller;
}
