$.ajax({
    url:"/getAllProvinceAndCities",
    type:"post",
    success:function(data){
        for(var i=0;i<data.length;i++){
            let option = $("<option></option>");
            option.text(data[i].city);
            $("#city").append(option);
        }
    },
    error:function(error){
        alert("网络故障！");
    }
})
$("#captcha").click(function(){
    $(this).attr("src","/captcha?="+new Date().getTime());
});
$("#registerBtn").click(function(){
    let phoneNum = $("#phoneNum").val();
    let password1 = $("#password1").val();
    let password2 = $("#password2").val();
    let verifyWord = $("#verifyWord").val();
    let province = $("#province").find("option:selected").text();
    let city = $("#city").find("option:selected").text();
    let address = $("#userAddress").val();
    if(phoneNum==''){
        alert("亲，手机号不能为空哦！^_^");
    }else if(password1==''){
        alert("亲，密码不能为空哦！^_^");
    }else if(password2!=password1){
        alert("亲，两次输入的密码不一致哦！^_^");
    }else if(verifyWord==''){
        alert("亲，请动动手指输入一下验证码哦！^_^");
    }else if(address==''){
        alert("亲，你还没有输入地址哦！^_^");
    }else{
        $.ajax({
            url:"/register",
            type:"post",
            data:{
                phoneNum:phoneNum,
                verifyWord:verifyWord
            },
            success:function(data){
                if(data=='wrongVerify'){
                    alert("验证码错误！");
                    $("#captcha").attr("src","/captcha?="+new Date().getTime());
                }else if(data=='wrongPhoneNumber'){
                    alert("手机号不存在或已被注册！");
                }else{
                    $.ajax({
                        url:"/doRegister",
                        type:"post",
                        data:{
                            phoneNum:phoneNum,
                            password:password1,
                            province:province,
                            city:city,
                            address:address
                        },
                        success:function(data){
                            alert("注册成功！您的手机号即为您的子牙账号，请牢记您的账号及密码。");
                            window.location.href="/login.html";
                        },
                        error:function(error){
                            alert("网络故障！")
                        }
                    })
                }
            },
            error:function(error){
                alert("网络出错！");
            }
        });
    }
})