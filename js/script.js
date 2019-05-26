$(function() {
    $('#navigation ul li').click(function() {
            $('#navigation ul li').removeClass('selected');
            $(this).addClass('selected');
            //$('a', this).addClass('selected');
        
    });
});