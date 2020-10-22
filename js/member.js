$(function(){
    
           $('button').on('click',function(){
                
               
            if($('.filter').hasClass('active')){
                $('.filter').removeClass('active');
                
            }else{
                $('.filter').addClass('active');
            }
    });
            $('#more').on('click',function(){
            if($('#more').hasClass('active')){
                $('#more').remove('active');
            }else{
                $('#more').addClass('active');
            }
        })
    
    
});//end
