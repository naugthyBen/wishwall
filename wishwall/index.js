$(document).ready(function() {
    idContentchange();       // 用户界面心愿、评论切换
    indexContentchange();    // 许愿主页热门许愿、本周最新、热门话题
    clickHeart();          //点赞
    clickChangeImg();    //点击更换头部背景图
    // clickdel();
    // nodel();
    // yesdel();
    hideuser();   //匿名评论
    hidewishuser();//匿名发布
    getit();  //我知道了
    limit();
});
// 用户界面心愿、评论切换
function idContentchange(){
    let $idContent_li =$(".id_tab_menu ul li");
    $idContent_li.click(function(){
        $(this).addClass("id_selected")
            .siblings().removeClass("id_selected");
        let index = $idContent_li.index(this);
        $(".id_tab_box>div")
            .eq(index).show()
            .siblings().hide();
    })
}

// 许愿主页热门许愿、本周最新、热门话题
function indexContentchange(){
    let $indexContent_li =$(".index_tab_menu ul li");
    $indexContent_li.click(function(){
        $(this).addClass("index_selected")
            .siblings().removeClass("index_selected");
        let index = $indexContent_li.index(this);
        $(".index_tab_box>div")
            .eq(index).show()
            .siblings().hide();
    })
}

// var clickdel=(function clickdel(){
//     var fn;   
//     $(".del").bind("click",function abc(){
//         $(".delif").show();
//         $(".delBox").show();
//         console.log($(this).parent().parent(".bgc"));
//         function del(){
//             $(this).parent().parent(".bgc").hide();
//         }
//       return del;
//     });
//     fn = del;
//    function nodel(){
//         $(".nodel").bind('click', function() {
//             $(".delif").hide();
//             $(".delBox").hide();
//         });
//     }
//     function yesdel(){
//         $(".yesdel").bind('click',function (){
//             fn();
//            $(".delif").hide();
//            $(".delBox").hide();
           
//            // console.log(fn());
//            console.log("3");
//         });
//     }
//     return{
//         nodel:nodel,
//         yesdel:yesdel
//     }
// })();
// clickdel.nodel();
// clickdel.yesdel();



// function clickdel(){
//     var delt=( $(".del").bind("click",function (){
//         $(".delif").show();
//         $(".delBox").show();
//         // console.log($(this).parent().parent(".bgc"));
//         return function del(){
//             $(this).parent().parent(".bgc").hide();
//         }
//     })();
//     fn=del;
// }

// // var clickd=clickdel();
// function nodel(){
//     $(".nodel").bind('click', function() {
//         $(".delif").hide();
//         $(".delBox").hide();
//     });
// }

// function yesdel(){
//     $(".yesdel").bind('click',function (){
//        $(".delif").hide();
//        $(".delBox").hide();
//        fn();
//     });
// }


//匿名评论
function hideuser(){
    $(".hideuser").bind('click', function() {
        if($(".hideformbox").is(":visible")){
            $(".hideformbox").hide();
            $(".hideuser").removeClass("hidename");           
        }else{
            $(".hideformbox").show();
            $(".hideuser").addClass("hidename");  
        }
    });
}
//匿名发布
function hidewishuser(){
    $(".hidewishuser").toggle( function() {
            $(".choosedhide").show();
            $(".canceledhide").hide();
            $(".hidewishuser").addClass("hidename"); 
            setTimeout(function(){
                $(".choosedhide").hide();
                $(".canceledhide").hide();
            }, 1000);        
        },function(){
            $(".canceledhide").show();
            $(".choosedhide").hide();
            $(".hidewishuser").removeClass("hidename");  
             setTimeout(function(){
                $(".choosedhide").hide();
                $(".canceledhide").hide();
            }, 1000);
        
    });
}
//我知道了
function getit(){
    $(".getit").toggle(function(){
        $(".niming").hide();
        $(".remen").show();
    },function(){
        $(".remen").hide();
        $(".uncom").show();
    },function(){
        $(".uncom").hide();
        $(".mengban").hide();
    })
}
//字数限制
function limit(){
    $(".targetip>input").keyup(function() {
        if ($.trim(this.value).length > 11) { alert("输入字符大于11个,请重新输入!"); }
    });
}

// 详情页不许评论
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
