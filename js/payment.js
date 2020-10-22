$(function(){
            var info = $('.pro_info img').offset().top + $('.pro_info img').outerHeight(true);
            var wH = $(window).height()/1.5;
            
           $(window).scroll(function(){
            console.log($(this).scrollTop())   
                   if(info-wH < $(this).scrollTop()){
                       console.log('a')
                       $('.right').css({
                           position:'absolute',
                           top:(info-wH) + 220
                       });
                   }else{
                        $('.right').css({
                           position:'fixed',
                           top:120
                       });
    
                   }
               
           })
           
            
           
        function init() { //start

            // var ran = document.querySelectorAll('.num div');
            var num = null;
            var arr = [
               'img/sin1.png',
                'img/sin2.png',
                'img/sin3.png',
                'img/sin4.png',
                'img/sin5.png',
                'img/sin6.png',
                'img/sin7.png',
                'img/sin8.png'
            ];
            var aaa=[],bln,num2=[];
            function rand() {

                var arrLen = arr.length,currentIndex = 0;

                while(currentIndex < arrLen){
                    
                    num = Math.floor(Math.random() * 8);
                  for(var i = 0; i < num2.length; i++){
                        if(num == num2[i]){
                            bln = true;
                            break;
                        }
                  }//for
                    if(bln){
                        bln = false;
                    }else{
                        num2.push(num);
                        currentIndex++;
                    }
                }   
                
                 console.log(aaa)

                for (var i = 0; i < num2.length; i++) {



                    $('.insta').append("<div style='float:left;'><img src='" + arr[num2[i]] +"' id='banner' alt=''></div>");
                    
                    
                } //for
                
                
                // console.log(arr[num]);

            } //move
            rand();

        } //end
        init();
        

            
//         $(".insta").click(function(e){
//            e.preventDefault();
//            $(this).fadeIn(400);
//        });
//          $("#layer .close").click(function(e){
//            e.preventDefault();
//            $(this).fadeOut(400);
//        });
            
            
            
        $('#decreaseQuantity').click(function(e){
            e.preventDefault();
            var stat = $('#numberUpDown').text();
            var num = parseInt(stat,10);
            num--;
            if(num<=0){
            alert('최소 수량은 1개 입니다.');
            num =1;
            }
            $('#numberUpDown').text(num);
            });
            $('#increaseQuantity').click(function(e){
            e.preventDefault();
            var stat = $('#numberUpDown').text();
            var num = parseInt(stat,10);
            num++;

            if(num>5){
            alert('최대 5개까지 구매 가능합니다.');
            num=5;
            }
            $('#numberUpDown').text(num);
            });
            
    });//last
