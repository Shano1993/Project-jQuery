$('#myId').append('<p>Hello World</p>');
$('p').addClass('monP').append('<a>Hello</a>');
$('a').attr('href', 'https://www.google.be');

$('body').prepend('<div></div>');
$('div').first().addClass('parent').css({
    'width' : '100px',
    'height' : '100px'
});

$('.parent').prepend('<div></div>').prepend('<div></div>').prepend('<div></div>').prepend('<div></div>');

alert($('.parent').index());







