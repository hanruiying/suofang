/**
 * Created by lenovo on 2018/4/27.
 */
$(function(){
    var arrImg=['img/bz1.png','img/bz2.png','img/bz3.png','img/bz4.png','img/bz5.png'];
    $(".little-image img").click(function(){
        $(".pop").css("display","block");
        var index=$(this).index();
        //图片居中显示
        function showImage(){
            $(".con-img").append("<img>");
            $(".con-img img").attr("src",arrImg[index]);
            var boxWidth=$(".con-img").width();
            var boxHeight=$(".con-img").height();
            var curWidth=$(".con-img img").width();
            var curHeight=$(".con-img img").height();
            if(curWidth>=curHeight){
                $(".con-img img").css("width",boxWidth);
                var marTop=$(".con-img img").height();
                $(".con-img img").css("margin-top",(boxHeight-marTop)/2);
            }else{
                $(".con-img img").css("height",boxHeight);
                var marLeft=$(".con-img img").width();
                $(".con-img img").css("margin-left",(boxWidth-marLeft)/2);
            }
        };
        showImage();
        //点击上一张
        $(".mask-prev").click(function(){
            $(".con-img img").remove();
            index-=1;
            if(index<=-1){
                index=4;
            }
            showImage();
        });
        //点击下一张
        $(".mask-next").click(function(){
            $(".con-img img").remove();
            index+=1;
            if(index>=5){
                index=0;
            }
            showImage();
        });
        //旋转
        var a=0;
        $(".revolution").click(function(){
            a+=15;
            $(".con-img img").css({"transform":"rotate("+ a +"deg)",
                "-webkit-transform":"rotate("+ a +"deg)",
                "-o-transform":"rotate("+ a +"deg)"
            });
        });
        $(".counter-revolution").click(function(){
            a-=15;
            $(".con-img img").css({"transform":"rotate('+ a +'deg)",
                "-webkit-transform":"rotate("+ a +"deg)",
                "-o-transform":"rotate("+ a +"deg)"
            });
        });
        //放大
        var multiple=1;
        $(".mask-big").click(function(){
          multiple+=0.1;
          $(".con-img img").css({
              "transform":"scale("+multiple+")",
              "-webkit-transform":"scale("+multiple+")",
              "-o-transform":"scale("+multiple+")"
          })
        });
        //缩小
        $(".mask-small").click(function(){
            multiple-=0.1;
            if(multiple<=0.1){
                multiple=0.1;
            }
            $(".con-img img").css({
                "transform":"scale("+multiple+")",
                "-webkit-transform":"scale("+multiple+")",
                "-o-transform":"scale("+multiple+")"
            })
        });
        //关闭
        $(".mask-close").click(function(){
               $(".pop").css("display","none");
        });
        $(".black").click(function(){
               $(".pop").css("display","none");
        })

    })
})