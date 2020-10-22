$(function(){
    
           $('button').on('click',function(){
                
               
            if($('.filter').hasClass('active')){
                $('.filter').removeClass('active');
                
            }else{
                $('.filter').addClass('active');
            }
    });
//        $(".filter").toggleClass('active');
    
//    $('.filter').click(function(){
//        $(this).toggleClass("on off");
//    });
    
        $('#more').on('click',function(){
            
            if($('#more').hasClass('active')){
                $('#more').remove('active');
            }else{
                $('#more').addClass('active');
            }
        })
    
});//end

