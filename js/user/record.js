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

$("#index").click(function(){
    window.location.href="/index.html";
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

$("#vip").click(function(){
    window.location.href="/vip.html";
})

$.ajax({
    url:"getAllRecord",
    type:"post",
    success:function(data){
        for(let i=0; i<data.length; i++){
            if(data[i].isV=="no"){
                var li = $("<li class=' col-lg-3 col-md-6 col-sm-6'></li>");
                var div1 = $("<div class='record-box'></div>");
                var img = $("<img class='record-img' src=' "+data[i].sImg+"'></img>");
                var div2 = $("<div class='col-lg-12 record-box-title'></div>");
                div2.text(data[i].sName);
                var div3 = $("<div class='col-lg-12 record-box-text'></div>");
                var p1 = $('<p></p>');
                p1.text("起拍价:￥9.99");
                var p2 = $('<p></p>')
                p2.text("成交价:￥"+data[i].sPrice);               
                div3.append(p1);
                div3.append(p2);
                div1.append(img);
                div1.append(div2);
                div1.append(div3);
                li.append(div1);
                $("#recordContent").append(li);
            }
            
        }
        
    },
    error:function(error){
        alert("网络故障！");
    }
})