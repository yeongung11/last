$(function () {
    //start  

    $.ajax({
        url: 'data.json',
        type: 'get',
        data:{a:10},
        beforeSend:function(){
            //로딩중
            
            $('.loading').fadeIn();//loading클래스를 fadein시킴
        }, 
        complete:function(){
            //로딩중 삭제
            
            $('.loading').fadeOut();//loading클래스를 fadeout시킴
        }, 
        
        success:function(data){ 
//            console.log(data.product[0].tit)
            var type,kind,imgSrc,tit,url,tagList=''; //type,kind,imgSrc,tit,url,tagList=''을 선언함
            $.each(data.product,function(value, key){//forEach문으로 tagList를 반복시킴
//                console.log(value);
                type = value.type;
                kind = value.kind;
                imgSrc = value.imgSrc;
                tit = value.tit;
                url = value.url; //각 선언값에 value값을 넣어줌
                
                tagList += "<figure>";
                tagList += "<a href='"+url+"'>"; 
                tagList += "<p><img src='" + imgSrc + "' alt=''></p>";
                tagList += "<figcaption>";
                tagList += "<i>" + kind + "</i>";
                tagList += "<p>" + tit + "</p>";
                tagList += "</figcaption>";
                tagList += "</a>";
                tagList += "</figure>"; //선언한 tagList안에 figure를 넣어줌
                
            });//forEach
            $('.list').html(tagList);
            
            
        }//success
    });//ajax







    //end    
})
