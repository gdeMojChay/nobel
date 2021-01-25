$( document ).ready(function(){
    $('.readmore').click(function() {
        $('.bio').show();
    });
    $('.close').click(function(){
        $(this).parent().parent().hide()
    })
});
