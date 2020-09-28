// $.ajax({
//     url:"getAuctionCommodities",
//     type:"post",
//     success:function(data){
//         $("#sImg").attr("src",data[0].sImg);
//         $("#sName").text(data[0].sName);
//         $("#nowPrice").val(data[0].sPrice);
//     },
//     error:function(error){
//         alert("网络故障！");
//     }
// })

$(".indexList").children('li').click(function(){
    $(this).siblings().removeClass("indexList_active");
    $(this).addClass("indexList_active");
});
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
$("#index").click(function(){
    window.location.href="/index.html";
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

