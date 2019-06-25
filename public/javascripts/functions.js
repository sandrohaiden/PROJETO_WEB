

function teste(x) {
    var carrinho = []
    if (window.sessionStorage.getItem('carrinho')) {
        carrinho = (JSON.parse(window.sessionStorage.getItem('carrinho')));
        console.log('tem algo na session');
        console.log(carrinho.length);
    }
    for (i of carrinho) {
        if (i.procodigo == x.procodigo) {
            console.log('existe um igual');
            alert(carrinho.length);
            break;
        }
        if ((i.procodigo == carrinho[carrinho.length - 1].procodigo)
            && i.procodigo != x.procodigo) {
            console.log('tá no último');
            carrinho.push(JSON.parse(JSON.stringify(x)));
        }
    }
    if (carrinho.length == 0) {
        console.log('não tem nada')
        carrinho.push(JSON.parse(JSON.stringify(x)));
    }
    window.sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    console.log(carrinho);
    var url = "/carrinho";
    $(location).attr('href',url);
}

function removeCarrinho(index) {
    var carrinho = [];
    if (window.sessionStorage.getItem('carrinho')) {
        carrinho = (JSON.parse(window.sessionStorage.getItem('carrinho')));
        console.log('tem algo na session');
        console.log(carrinho.length);
    }
    if (index > -1) {
        carrinho.splice(index, 1);
    }
    window.sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    console.log(carrinho);
    init();
}

function init() {
    var carrinho = []
    carrinho = window.sessionStorage.getItem('carrinho');
    carrinho = JSON.parse(carrinho);
    console.log(carrinho);

    let cards = '';

    if (carrinho.length != 0) {
        $.each(carrinho, function (index, item) {
            cards = cards +
                '<div class="col l3">' +
                '<div class="card">' +
                '<div class="card-image waves-effect waves-block waves-light">' +
                '<a href="/produtos/' + item.procodigo + '">' +
                '<img src="' + item.projfotos[0].path + '">' +
                '</a>' +
                ' </div>' +
                '<div class="card-content">' +
                '<span class="card-title activator grey-text text-darken-4">' + item.pronome + '<i ' +
                'class="material-icons right">more_vert</i></span>' +
                '<a class="btn-floating btn-large waves-effect waves-light red" onclick="removeCarrinho(' + index + ')"><i class="material-icons">remove_shopping_cart</i></a>' +
                '</div>' +
                '<div class="card-reveal">' +
                '<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>' +
                '<p>Here is some more information about this product that is only revealed once clicked on.</p>' +
                '</div>' +
                '</div>' +
                '</div>'
        })
        $('.row').html(cards);
    }
    else{
        cards = '<h3>Carrinho Vazio! <i class="material-icons">mood_bads</i></h3>'
        $('.row').html(cards);
    }
}