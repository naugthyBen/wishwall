$(document).ready(function() {
    idContentchange();
    indexContentchange();
    clickHeart();
    clickChangeImg();
});
// 用户界面心愿、评论切换
function idContentchange(){
    var $idContent_li =$(".id_tab_menu ul li");
    $idContent_li.click(function(){
        $(this).addClass("id_selected")
            .siblings().removeClass("id_selected");
        var index = $idContent_li.index(this);
        $(".id_tab_box>div")
            .eq(index).show()
            .siblings().hide();
    })
}


// 许愿主页热门许愿、本周最新、热门话题
function indexContentchange(){
    var $indexContent_li =$(".index_tab_menu ul li");
    $indexContent_li.click(function(){
        $(this).addClass("index_selected")
            .siblings().removeClass("index_selected");
        var index = $indexContent_li.index(this);
        $(".index_tab_box>div")
            .eq(index).show()
            .siblings().hide();
    })
}


//点赞
function clickHeart(){
    $(".love>img").live("click",function (){
        var imgsrc=$(this).attr('src');
        var mid=$(this).attr('mid');
        var loveNum=parseInt($(this).siblings().eq(0).text());
        if(imgsrc=='img/loved.png'){
            $(this).attr('src','img/love.png');
            if(loveNum>0){
                $(this).siblings().eq(0).text((loveNum-1));
            }
        }else{
            $(this).attr('src','img/loved.png');
            $(this).siblings().eq(0).text((loveNum+1));                             
        }
        
        //  $.ajax({
        //      url: 'enter/homePage_doZan.action?targetMid='+mid,     //要访问的service路径
        //      type: "get",        //访问实现的方式:get 或 post
        //      async:true,      //是否异步
        //      cache:false,      //是否缓存
        //      success:function(result){    //请求成功后执行
        //      }
        // });
    });
}

//点击更换头部背景和页面背景色,个人愿望详情页愿望背景
function clickChangeImg(){
    $(".bgchange1>img").live("click",function (){
            $('.bg>img').attr('src','img/bgimg1.png');
            $('html').css("background-color","#ccf0ff");
            $('.bgc').css("background-color","#ccf0ff");
    });
    $(".bgchange2>img").live("click",function (){
            $('.bg>img').attr('src','img/bgimg2.png');
            $('html').css("background-color","#fbeee5");
            $('.bgc').css("background-color","#fbeee5");
    });
    $(".bgchange3>img").live("click",function (){
            $('.bg>img').attr('src','img/bgimg3.png');
            $('html').css("background-color","#fbf3c5");
            $('.bdc').css("background-color","#fbf3c5");
    });
}



//点击更换图标事件
function changeTypeIcon(){
    $("input[name='message.mtype']").click(
        function (){
            var tnext=$(this).next();
            var tyepLabel=tnext.attr('id');
            if(tyepLabel=='sayhi_label'){
                tnext.css('background-image','url(./img/sayhi_type_yes.png)');
                $("#pray_label").css('background-image','url(./img/pray_type_no.png)');
                $("#complain_label").css('background-image','url(./img/complain_type_no.png)');
                $("#default_label").css('background-image','url(./img/default_type_no.png)');
            }else if(tyepLabel=='pray_label'){
                tnext.css('background-image','url(./img/pray_type_yes.png)');
                $("#sayhi_label").css('background-image','url(./img/sayhi_type_no.png)');
                $("#complain_label").css('background-image','url(./img/complain_type_no.png)');
                $("#default_label").css('background-image','url(./img/default_type_no.png)');
            }else if(tyepLabel=='complain_label'){
                tnext.css('background-image','url(./img/complain_type_yes.png)');
                $("#sayhi_label").css('background-image','url(./img/sayhi_type_no.png)');
                $("#pray_label").css('background-image','url(./img/pray_type_no.png)');
                $("#default_label").css('background-image','url(./img/default_type_no.png)');
            }else if(tyepLabel=='default_label'){
                tnext.css('background-image','url(./img/default_type_yes.png)');
                $("#sayhi_label").css('background-image','url(./img/sayhi_type_no.png');
                $("#pray_label").css('background-image','url(./img/pray_type_no.png)');
                $("#complain_label").css('background-image','url(./img/complain_type_no.png)');
            }
            
        }
    );
}
$(".message").each(function(){
  var maxwidth=61;
  if($(this).text().length > maxwidth){
    $(this).text($(this).text().substring(0,maxwidth));
    $(this).html($(this).html()+'...');
  }
});

// var wordLimit=function(){
//     $(".message").each(function(){
//         var copyThis = $(this.cloneNode(true)).hide().css({
//             'position': 'absolute',
//             'width': 'auto',
//             'overflow': 'visible'
//         });	
//         $(this).after(copyThis);
//         if(copyThis.width()>$(this).width()){
//             $(this).text($(this).text().substring(0,$(this).html().length-4));
//             $(this).html($(this).html()+'...');
//             copyThis.remove();
//             wordLimit();
//         }else{
//             copyThis.remove(); //清除复制
//             return;
//         }
//     });
// }
// wordLimit();