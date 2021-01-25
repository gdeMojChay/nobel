$( document ).ready(function(){
    $('.readmore').click(function() {
        $('.bio').show();
        $('#name').text($(this).parent().children('.name').children('h3').text());
        $('.bio').children('span').load('./bio.html #'+$(this).attr('id'));
    });
    $('.close').click(function(){
        $(this).parent().parent().hide()
    })
});
