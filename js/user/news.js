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

$("#index").click(function(){
    window.location.href="/index.html";
})

$.ajax({
    url:"/getNews",
    type:"post",
    success:function(data){
        $("#newsTitle").text(data[0].newsTitle);
        $("#publishDate").text(data[0].publishDate);
        $("#newsPicture").attr("src",data[0].newsPicturePath);
        $("#newsP1Title").text(data[0].newsP1Title);
        $("#newsP1").text(data[0].newsP1);
        $("#newsP2Title").text(data[0].newsP2Title);
        $("#newsP2").text(data[0].newsP2);
        $("#newsP3Title").text(data[0].newsP3Title);
        $("#newsP3").text(data[0].newsP3);
        $("#newsP4Title").text(data[0].newsP4Title);
        $("#newsP4").text(data[0].newsP4);
    },
    error:function(error){
        alert("网络故障！");
    }
})
