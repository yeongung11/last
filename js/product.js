
    $(function() {
      
        $(".slide").slick({
             breakpoint: 400,
            arrows:false,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            edgeFriction:10,
            slidesToScroll: 3
            /*
            좌우에 이전 다음 배너를 조금 보이고 싶을때
            centerMode: true,
            centerPadding: '60px',
            */
        });
        
        
        $(".slide2 ul").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
        
        
        $('.bn').eq(1).find('p').addClass('active');

        $('.slide2 ul').on('beforeChange',function(event, slick, currentSlide, nextSlide){
            console.log('before', slick);
            $('.bn p').removeClass('active');
        });
        
        $('.slide2 ul').on('afterChange',function(event, slick, currentSlide){
            console.log('after', slick);
            $('.bn').eq(currentSlide+1).find('p').addClass('active');
        });
        
        $('#more').on('click',function(){
            if($('#more').hasClass('active')){
                $('#more').remove('active');
            }else{
                $('#more').addClass('active');
            }
        })
     
    });
