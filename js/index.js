$(function(){
function init() { //start

            // var ran = document.querySelectorAll('.num div');
            var num = null;
            var arr = [
               'img/in1.png',
                'img/in2.png',
                'img/in3.png',
                'img/in4.png',
                'img/in5.png',
                'img/in6.png',
                'img/in7.png',
                'img/in8.png'
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



                    $('.num').append("<div style='float:left; '><img src='" + arr[num2[i]] +"' id='banner' alt=''></div>");
                    
                    
                } //for
                
                
                // console.log(arr[num]);

            } //move
            rand();

        } //end
        init();
});
        
  
