

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
var sum = 0;
$("#auction").click(function(){
    window.location.href="/auctionList.html";
})

$("#index").click(function(){
    window.location.href="/index.html";
})

$("#vip").click(function(){
    window.location.href="/vip.html";
})

$("#record").click(function(){
    window.location.href="/record.html";
})

var username = document.cookie.split("=")[1];
var array = new Array();
$.ajax({
    url:"/cartDetail",
    type:"post",
    success:function(data){
        for(let i=0; i<data.length; i++){
            (function(i){
                if(data[i].owner==username){
                    var li = $("<li class=' col-lg-3 col-md-6 col-sm-6'></li>");
                    var div1 = $("<div class='record-box'></div>");
                    var img = $("<img class='record-img' src=' "+data[i].sImg+"'></img>");
                    var div2 = $("<div class='col-lg-12 record-box-title'></div>");
                    div2.text(data[i].sName);
                    var div3 = $("<div class='col-lg-12 record-box-text'></div>");     
                    var p2 = $('<p></p>')
                    p2.text("成交价:￥"+data[i].sPrice);   
                    var p1 = $("<input type='checkbox' class='select'/>");
                    p1.attr("id",data[i].sName);
                    p1.click(function(){
                        
                        if(p1.prop("checked")){
                            sum+=parseInt(p1.parent().children("p").text().split("￥")[1]);
                            $("#totalPrice").val(sum);
                            var a = $(this).attr("id");
                            array.push(a);
                        }else{
                            sum-=parseInt(p1.parent().children("p").text().split("￥")[1]);
                            $("#totalPrice").val(sum);
                            for(var j=0;j<array.length;j++){
                                if($(this).attr("id")==array[j]){
                                    array.splice(j,1);
                                }
                            }
                        }
                        
                        

                        
                        $.ajax({
                            url:"/getlevel",
                            type:"post",
                            success:function(data){

                                var totalPrice = $("#totalPrice").val();
                                
                                if(data[0].level == "青铜会员") {
                                    countPrice = parseInt(totalPrice)*1 * 0.99;
                                }
                                else if(data[0].level == "白银会员") {
                                    countPrice = parseInt(totalPrice)*1 * 0.95;
                                }
                                else if(data[0].level == "黄金会员") {
                                    countPrice = parseInt(totalPrice)*1 * 0.90;
                                }
                                else if(data[0].level == "铂金会员") {
                                    countPrice = parseInt(totalPrice)*1 * 0.85;
                                }
                                else if(data[0].level == "钻石会员") {
                                    countPrice = parseInt(totalPrice)*1 * 0.80;
                                }
                                else if(data[0].level == "白金会员") {
                                    countPrice = parseInt(totalPrice)*1 * 0.75;
                                }
                                $("#countPrice").text("￥" + countPrice);
                            }, 
                            error:function(error){
                                alert("网络故障！");
                            }
                        });

                        
                    });
                    var p3 = $('<span></span>');
                    p3.text("付款");          
                    div3.append(p2);
                    div3.append(p1);
                    div3.append(p3);
                    div1.append(img);
                    div1.append(div2);
                    div1.append(div3);
                    li.append(div1);
                    $("#recordContent").append(li);             
                }
            })(i); 
        }      
    },
    error:function(error){
        alert("网络故障！");
    }
})

    

$(".vip-wx").click(function(){
    $(".vip-wx").addClass("vip-wx-on");
    $(".vip-zfb").removeClass("vip-zfb-on");
})
$(".vip-zfb").click(function(){
    $(".vip-zfb").addClass("vip-zfb-on");
    $(".vip-wx").removeClass("vip-wx-on");
})
$("#pay").click(function(){
    $.ajax({
        url:"/successBuy",
        type:"post",
        data:{
            array:JSON.stringify(array)
        },
        success:function(data){
            alert("支付成功！");
            window.location.href="/cart.html";
        },
        error:function(error){
            alert("网络故障！");
        }
    })
})