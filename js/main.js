$( document ).ready(function(){
    $('.readmore').click(function(){
        $('#Modal').modal('show');
        $('#ModalScrollableTitle').text($(this).parent().children('.name').children('h3').text());
        $('#load').load('./bio.html #'+$(this).attr('id'))
    });
    $('.close').click(function(){
    $('#Modal').modal('hide')});
});
