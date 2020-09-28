//初始化swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
	},
});
$(".indexList").children('li').click(function(){
    $(this).siblings().removeClass("indexList_active");
    $(this).addClass("indexList_active");
});

//登录事件
$("#login").click(function(){
    $.ajax({
        url:"/tryLogin",
        type:"post",
        success:function(data){
            if(data=="toLogin"){
                window.location.href="/login.html";
            }else{
                window.location.href="/userMessage.html";
            }
        },
        error:function(error){
            alert("网络故障，请稍后再试。");
        }
    })
})

$("#auction").click(function(){
    window.location.href="/auctionList.html";
})

$("#vip").click(function(){
    window.location.href="/vip.html";
})

$("#cart").click(function(){
    $.ajax({
        url:"tryLogin",
        type:"post",
        success:function(data){
            if(data=='logined')
            window.location.href="/cart.html";
            else{
                alert("登录后才能查看购物车哦！");
                window.location.href="/login.html";
            }
        },
        error:function(error){
            alert("网络故障！");
        }
    })   
})

$("#record").click(function(){
    window.location.href="/record.html";
})

$(".news").click(function(){
    var news = $(this).attr("news");
    $.ajax({
        url:"toNews",
        type:"post",
        data:{
            news:news,
        },
        success:function(data){
            window.location.href="/news.html";
        },
        error:function(){
            alert("网络故障！");
        }
    })
})
