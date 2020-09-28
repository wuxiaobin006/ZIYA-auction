var express = require('express');
var app = express();
var client = {};
var timers={};
var countds={};
var expressWs = require('express-ws');
expressWs(app);

//配置文件上传中间件multer
var multer = require('multer');
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname+"/upload");
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname);
    }
})
var upload = multer({storage:storage})
app.use('/upload', express.static('upload'));

//数据库配置
var databaseOperator = require('./js/databaseOperator');
databaseOperator = new databaseOperator();

//创建编码解析器
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

//session配置
var session = require("express-session");
app.use(session({
    secret:"lucass",
    cookie:{maxAge:800000*1000},
    resave:true,
    saveUninitialized:false,
}));


//用户端文件路径配置
app.get('/test.html',function(req,res){
    res.sendFile(__dirname+"/test.html");
})
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/html/user/index.html");
})
app.get('/login.html',function(req,res){
    res.sendFile(__dirname+"/html/user/login.html");
})
app.get('/register.html',function(req,res){
    res.sendFile(__dirname+"/html/user/register.html");
})
app.get('/userMessage.html',function(req,res){
    res.sendFile(__dirname+"/html/user/userMessage.html");
})
app.get('/auctionList.html',function(req,res){
    res.sendFile(__dirname+"/html/user/auctionList.html");
})
app.get('/auction.html',function(req,res){
    res.sendFile(__dirname+"/html/user/auction.html");
})
app.get('/vip.html',function(req,res){
    res.sendFile(__dirname+"/html/user/vip.html");
})
app.get('/cart.html',function(req,res){
    res.sendFile(__dirname+"/html/user/cart.html");
})
app.get('/record.html',function(req,res){
    res.sendFile(__dirname+"/html/user/record.html");
})
app.get('/preview.html',function(req,res){
    res.sendFile(__dirname+"/html/user/preview.html");
})
app.get('/news.html',function(req,res){
    res.sendFile(__dirname+"/html/user/news.html");
})
app.get('/jQuery.js',function(req,res){
    res.sendFile(__dirname+"/js/jQuery.js");
})
app.get("/vue.js",function(req,res){
    res.sendFile(__dirname+"/js/vue.js");
})
app.get('/bootstrap.min.js',function(req,res){
    res.sendFile(__dirname+"/js/bootstrap/bootstrap.min.js");
})
app.get('/bootstrap.bundle.min.js',function(req,res){
    res.sendFile(__dirname+"/js/bootstrap/bootstrap.bundle.min.js");
})
app.get('/swiper.js',function(req,res){
    res.sendFile(__dirname+"/js/swiper/swiper.js");
})
app.get('/user/index.js',function(req,res){
    res.sendFile(__dirname+"/js/user/index.js");
})
app.get('/user/login.js',function(req,res){
    res.sendFile(__dirname+"/js/user/login.js");
})
app.get('/user/register.js',function(req,res){
    res.sendFile(__dirname+"/js/user/register.js");
})
app.get('/user/userMessage.js',function(req,res){
    res.sendFile(__dirname+"/js/user/userMessage.js");
})
app.get('/user/auctionList.js',function(req,res){
    res.sendFile(__dirname+"/js/user/auctionList.js");
});
app.get('/user/auction.js',function(req,res){
    res.sendFile(__dirname+"/js/user/auction.js");
});
app.get("/user/vip.js",function(req,res){
    res.sendFile(__dirname+"/js/user/vip.js");
})
app.get('/user/cart.js',function(req,res){
    res.sendFile(__dirname+"/js/user/cart.js");
})
app.get('/user/record.js',function(req,res){
    res.sendFile(__dirname+"/js/user/record.js");
})
app.get('/user/preview.js',function(req,res){
    res.sendFile(__dirname+"/js/user/preview.js");
})
app.get('/user/news.js',function(req,res){
    res.sendFile(__dirname+"/js/user/news.js");
})
//管理员端文件路径配置
app.get('/manager.html',function(req,res){
    res.sendFile(__dirname+"/html/manager/manager.html");
})
app.get('/userManage.html',function(req,res){
    res.sendFile(__dirname+"/html/manager/userManage.html");
})
app.get('/recordManage.html',function(req,res){
    res.sendFile(__dirname+"/html/manager/recordManage.html");
})
app.get('/addP.html',function(req,res){
    res.sendFile(__dirname+"/html/manager/addP.html");
})
app.get("/addS.html",function(req,res){
    res.sendFile(__dirname+"/html/manager/addS.html")
})
app.get("/mlogin.html",function(req,res){
    res.sendFile(__dirname+"/html/manager/mlogin.html")
})
app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
databaseOperator.getP(function(data){
    for(var i=0;i<data.length;i++){
        var wss = [];
        var timer;
        client[data[i].title]=wss;   
        timers[data[i].title]=timer;
        countds[data[i].title]=10;
    }
})

//登录状态判断
app.post('/tryLogin',function(req,res){
    if(req.session.user){
        res.send("logined");
    }else{
        res.send("toLogin");
    }
})

//登录
app.post("/login",urlencodedParser,function(req,res){
    let id = req.body.userId;
    let pwd = req.body.password;
    databaseOperator.doLogin(id,pwd,req,res);
})

//注册验证
app.post('/register',urlencodedParser,function(req,res){
    let phoneNum = req.body.phoneNum;
    let verifyWord = req.body.verifyWord;
    if(req.session.captcha==verifyWord){
        databaseOperator.isRegister(phoneNum,res);
    }else{
        res.send("wrongVerify");
    }
})

//注册
app.post('/doRegister',urlencodedParser,function(req,res){
    let phoneNum = req.body.phoneNum;
    let password = req.body.password;
    let province = req.body.province;
    let city = req.body.city;
    let address = req.body.address;
    databaseOperator.doRegister(phoneNum,password,province,city,address,res);
})

//生成验证码
var svgCaptcha = require('svg-captcha');
app.get('/captcha',function(req,res){
    const cap = svgCaptcha.create({
        color:true,
        size:5,
        ignoreChars:'0o1i',
        noise:2,
    });
    req.session.captcha = cap.text.toLocaleLowerCase();
    res.type('svg');
    res.send(cap.data);
})

//账户信息
app.post('/getMessage',function(req,res){
    let id = req.session.user.userId;
    databaseOperator.getUserMessage(id,res);
})

//获取数据库中所有地址
app.post("/getAllProvinceAndCities",function(req,res){
    databaseOperator.getAllCities(res);
})

//获取已保存地址
app.post("/getUserAdress",function(req,res){
    let id = req.session.user.userId;
    databaseOperator.getUserAddress(id,res);
})

//设置地址
app.post("/setAddress",urlencodedParser,function(req,res){
    let province = req.body.province;
    let city = req.body.city;
    let address = req.body.address;
    let id = req.session.user.userId;
    databaseOperator.setAddress(province,city,address,id,res);
})

//退出登录
app.post("/logout",function(req,res){
    req.session.destroy();
    res.send("success");
})

//获取拍卖会
app.post("/getAuction",function(req,res){
    databaseOperator.getAuction(res);
})

//获取成交记录
app.post("/getAllRecord",function(req,res){
    databaseOperator.getAllRecord(res);
})

//获取购物车
app.post("/cartDetail",function(req,res){
    databaseOperator.cartDetail(res);
})

//获取新闻
var newsTitle;
app.post("/toNews",urlencodedParser,function(req,res){
    newsTitle = req.body.news;
    res.send("success");
})
app.post("/getNews",function(req,res){
    databaseOperator.getNews(newsTitle,res);
})

//获取所有用户信息
app.post("/getAllUsers",function(req,res){
    databaseOperator.getAllUsers(res);
})

//搜索用户
app.post("/getUser",urlencodedParser,function(req,res){
    var keyWord = req.body.keyWord;
    databaseOperator.getUser(keyWord,res);
})

//充值
app.post("/vipChange",urlencodedParser,function(req,res){
    var value = req.body.value;
    var userId = req.session.user.userId;  
    if(value == "29000.00") {
        databaseOperator.vipChange("铂金会员",userId);
    }
    else if(value == "99000.00") {
        databaseOperator.vipChange("钻石会员",userId);
    }
    else if(value == "299000.00") {
        databaseOperator.vipChange("白金会员",userId);
    }
    else if(value == "10000.00") {
        databaseOperator.vipChange("青铜会员",userId);
    }
    else if(value == "15000.00") {
        databaseOperator.vipChange("白银会员",userId);
    }
    else if(value == "19000.00") {
        databaseOperator.vipChange("黄金会员",userId);
    }
    res.send("success");
})

//打折
app.post("/getlevel",function(req,res){
    var userId = req.session.user.userId;
    databaseOperator.getlevel(userId,res);
})

//购买成功
app.post("/successBuy",urlencodedParser,function(req,res){
    var array = req.body.array;
    array = array.slice(1,-1).split(',');
    for(var i=0;i<array.length;i++){
        array[i] = array[i].slice(1,-1);
        databaseOperator.successBuy(array[i]);
    }
    res.send("success");
})

//删除用户
app.post("/delUserId",urlencodedParser,function(req,res){
    var delUserId = req.body.delUserId;
    console.log(delUserId);
    databaseOperator.delUserId(delUserId);
    res.send("success");
})

//管理员
app.get('/mlogin',function(req,res){
    databaseOperator.check(req.query.user,req.query.pwd,function(data){
        if(data!=0){
            res.send("success");
        }else{
            res.send("faild");
        }
    })
})
app.get('/addP',function(req,res){
    console.log(req.query.title);
    console.log(req.query.start);
    console.log(req.query.end);
    databaseOperator.addP(req.query.title,req.query.start,req.query.end);
    databaseOperator.getP(function(data){
        for(var i=0;i<data.length;i++){
            var wss = [];
            var timer;
            client[data[i].title]=wss;   
            timers[data[i].title]=timer;
            countds[data[i].title]=10;
        }
    })
    res.send();
})
app.get('/getP',function(req,res){
    var result = ""
    console.log("getP");
    databaseOperator.getP(function(data){
        for(var i=0;i<data.length;i++){
            if(i==0){
                result+=data[i].title+","+data[i].start+","+data[i].end;
            }else{
                result+="/"+data[i].title+","+data[i].start+","+data[i].end;
            }
        }
        res.send(result);
    })
})
// app.ws('/websocket',function(ws,req){
//     var value = decodeURI(req.query.value);
//      console.log(value);
//     ws.on('message',function(msg){
//         console.log(msg);
//     })
// })
app.ws('/websocket',function(ws,req){
    var value = decodeURI(req.query.value);
    console.log(value);
    client[value].push(ws);
    // console.log(client.size);
    // for(var i in client){
    //     console.log(i);
    // }
    console.log(client[value]);
    ws.on('message',function(msg){
        console.log(msg);
        clearInterval(timers[value]);
        var sName= msg.split(":")[0];
        var sPrice = msg.split(":")[1];
        var owner = msg.split(":")[2];
        console.log(owner);
        databaseOperator.updatePrice(value,sName,sPrice,owner,function(data){
            console.log("update success");
        });
        countds[value]=10;
        timers[value] = setInterval(function(){
            countds[value]--;
            for(var i =0;i<client[value].length;i++){
                client[value][i].send("countdown:"+countds[value]);
            }
            if(countds[value]==0){
                databaseOperator.updateIsV(value,sName,"no",function(data){
                    console.log("update isV success");
                })
                for(var i =0;i<client[value].length;i++){
                    client[value][i].send("timeout:"+owner);
                }
                clearInterval(timers[value]); 
            }
        },1000);
        for(var i =0;i<client[value].length;i++){
            client[value][i].send(sPrice);
        }
    })
    ws.on('close',function(msg){
        console.log("close");
        for(var i=0;i<client[req.query.value].length;i++){
            if(this==client[req.query.value][i]){
                client[req.query.value].splice(i,1);
            }
        }
    })
})
app.post('/addS',upload.any(),function(req,res){
    var result = "/"+req.files[0].path.split("\\")[2]+"/"+req.files[0].path.split("\\")[3];
    databaseOperator.addS(req.body.title,req.body.sName,parseInt(req.body.sPrice),result,"yes","none",function(data){
        console.log(req.body.title+" "+req.body.sName+" "+req.body.sPrice);
        res.send("success");
    });
    
})
app.get('/getS',function(req,res){
    var value = req.query.value;
    // console.log(value);
    databaseOperator.getS(value,function(data){
        result="";
        for(var i =0;i<data.length;i++){
            if(i==0){
                result+=data[i].sName+","+data[i].sPrice+","+data[i].sImg+","+data[i].isV+","+data[i].owner;
            }
            else{
                result+="?"+data[i].sName+","+data[i].sPrice+","+data[i].sImg+","+data[i].isV+","+data[i].owner;
            }
        }
        // console.log(data);
        res.send(result);
    })
})
app.get('/deleteP',function(req,res){
    databaseOperator.deleteP(req.query.value,function(data){
        res.send("success");
    })
})

//发布服务
var server = app.listen(8088,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("http://%s:%s",host,port);
})