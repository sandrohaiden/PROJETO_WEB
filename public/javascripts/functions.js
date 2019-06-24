

function teste(x) {
    var carrinho = []
    if(window.sessionStorage.getItem('carrinho')){
        carrinho = (JSON.parse(window.sessionStorage.getItem('carrinho')));
    }
    for(i of carrinho){
        if(i.procodigo==x.procodigo){
            alert(carrinho.length);
            break;
        }
        if(i.procodigo != carrinho[carrinho.length-1].procodigo){
            carrinho.push(JSON.parse(JSON.stringify(x)));
        }
    }
    window.sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    console.log(carrinho);
}

function init() {
    var carrinho = []
    carrinho = window.sessionStorage.getItem('carrinho');
    carrinho = JSON.parse(carrinho);
    console.log(carrinho);

    let cards = '';
    $.each(carrinho, function (index, item) {
        cards = cards +
            '<div class="col l3">'+
                '<div class="card">'+
                    '<div class="card-image waves-effect waves-block waves-light">'+
                        '<a href="/produtos/'+ item.procodigo +'">'+
                            '<img src="'+ item.projfotos[0].path +'">'+
                        '</a>'+
                   ' </div>'+
                    '<div class="card-content">'+
                        '<span class="card-title activator grey-text text-darken-4">'+ item.pronome +'<i '+
                            'class="material-icons right">more_vert</i></span>'+
                    '</div>'+
                    '<div class="card-reveal">'+
                        '<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>'+
                        '<p>Here is some more information about this product that is only revealed once clicked on.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'
    })
    $('.row').html(cards);
    
    
    
        
}