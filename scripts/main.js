$(function(){
    $('#member_intro').append($('#kan').html());    
})

$('.team img').live('mouseenter', function(){
    $(this).attr('src', $(this).attr('data-photo-back'));
}).live('mouseleave', function(){
    $(this).attr('src', $(this).attr('data-photo-org'));
}).live("click", function(event){
    event.preventDefault();
    var person_tag = $(this).parent('a').attr('href');
    if(person_tag == '#jobs'){
        $('#content').animate({scrollTop: $('#jobs').offset().top + $("#content").scrollTop() -140 }, 400, null);
    }
    else{
        $('#content').animate({scrollTop: $('#member_intro').offset().top + $("#content").scrollTop() -140 }, 400, null);
        setTimeout(function(){
            $('#member_intro').slideUp('slow', function(){
                $('#member_intro').empty().append($(person_tag).html()).slideDown();
            });    
        }, 500)
    }
})

$('.mainmenu a').click(function(event){
    event.preventDefault();
    $(this).parents('ul').children('li').removeClass('menu_hover').addClass('menu_out');
    $(this).parent('li').addClass('menu_hover');
    var em = $(this).attr('href');
    var targetOffset = $(em).offset().top;
    if($(em).attr('id') != 'about'){
        doc_position = targetOffset - 140 + $("#content").scrollTop();
    }
    else{
        doc_position = 0;
    }
    $('#content').stop().clearQueue().animate({scrollTop: (doc_position)}, 800, null);
})

$("#zzjs_net dt").click(function(){
	$(this).parents("li").siblings().find('dd').hide();
	$(this).parent().children('dd').toggle();
})