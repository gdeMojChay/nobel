$( document ).ready(function(){
    $('.readmore').click(function() {
        $('.bio').show();
        $('#name').text($(this).parent().children('.name').children('h3').text());
        $('.bio').children('.bio_body').children('span').load('./bio.html #'+$(this).attr('id'));
    });
    $('.close').click(function(){
        $(this).parent().parent().parent().hide()
    })
});
