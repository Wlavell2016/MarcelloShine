// $(document).on('click', 'a', function(event){
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 1200);
//
// });


$('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1200, 'swing', function () {
        window.location.hash = target;
    });
});
