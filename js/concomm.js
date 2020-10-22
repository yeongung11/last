$(function () {
    //start    
    
        
    
    $('header').load('/inc_head_foot11.html header', header);
    $('footer').load('/inc_head_foot11.html footer p');
    
    $.ajax({
        url:'data.xml',
        type:'GET',
        data:{a:10},
        beforeSend:function(){
          $('.load').fadeIn();  
        },
        complete:function(){
            $('.load').fadeOut();  
        },
        success:function(data){
            
        }

    })//ajax


    //end    
})
