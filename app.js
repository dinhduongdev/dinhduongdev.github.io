$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-x');
        $('.navbar').toggleClass('navbar-toggle');
    })
    $(window).on(' scroll load', function(){

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each( function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            if ( top >= offset  && top < height + offset )
            {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#'+id+'"]').addClass('active');
            }
        });
    });

});

    