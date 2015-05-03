
var menu = document.getElementById('menu');
var content = document.getElementById('content');

if (menu && content)
{
    var slideout = new Slideout({
        'panel': content,
        'menu': menu,
        'padding': 256,
        'tolerance': 70,
        'side': 'right'
    });

    $('.js-slideout-toggle').on('click', function() {
        slideout.toggle();
    });

    $('.menu-item').on('click', function() {
        slideout.toggle();
    });
}

