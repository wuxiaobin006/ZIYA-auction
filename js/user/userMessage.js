$(".indexList").children('li').click(function(){
    $(this).siblings().removeClass("indexList_active");
    $(this).addClass("indexList_active");
});
$("#index").click(function(){
    window.location.href='/index.html';
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
$.ajax({
    url:"/getMessage",
    type:"post",
    success:function(data){
        $("#userId").attr("placeholder",data[0].userId);
        $("#userLevel").attr("placeholder",data[0].level);
    },
    error:function(error){
        alert("网络故障！");
    }
})
$.ajax({
    url:"/getAllProvinceAndCities",
    type:"post",
    success:function(data){
        for(var i=0;i<data.length;i++){
            let option = $("<option value="+i+"></option>");
            option.text(data[i].city);
            $("#city").append(option);
        }
    },
    error:function(error){
        alert("网络故障！");
    }
})
$.ajax({
    url:"/getUserAdress",
    type:"post",
    success:function(data){
        var select = document.getElementById("province");
        for(var i=0;i<select.options.length;i++){
            if(select.options[i].text == data[0].province){
                select.options[i].selected=true;
                break;
            }
        }
        var select = document.getElementById("city");
        for(var i=0;i<select.options.length;i++){
            if(select.options[i].text == data[0].city){
                select.options[i].selected=true;
                break;
            }
        }
        $("#userAddress").val(data[0].address);
    },
    error:function(error){
        alert("网络故障！");
    }
})
$("#save").click(function(){
    let province = $("#province").find("option:selected").text();
    let city = $("#city").find("option:selected").text();
    let address = $("#userAddress").val();
    $.ajax({
        url:"/setAddress",
        type:"post",
        data:{
            province:province,
            city:city,
            address:address
        },
        success:function(data){
            alert("保存成功！");
        },
        error:function(error){
            alert("保存失败！");
        }
    })
})
$("#logout").click(function(){
    $.ajax({
        url:"/logout",
        type:"post",
        success:function(data){
            alert("退出成功！^-^");
            window.location.href="/index.html";
        },
        error:function(error){
            alert("退出失败！");
        }
    })
})

