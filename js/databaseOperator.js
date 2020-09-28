function databaseOperator(){
    var mysql = require('mysql');
    var dbconfig = require('./database');
    var pool = mysql.createPool(dbconfig.mysql);

    this.getAllCommodities = function(res){
        pool.getConnection(function(err,connection){
            var sql = 'SELECT * FROM commodity';
            connection.query(sql,function(err,result){
                result = JSON.stringify(result);
                res.send(result);
                connection.release();
            })
        }); 
    };

    this.doLogin = function(id,pwd,req,res){
        pool.getConnection(function(err,connection){
            var sql = 'SELECT password FROM usermessage WHERE userId=?';
            connection.query(sql,id,function(err,result){
                connection.release();
                if(pwd==result[0].password){
                    req.session.user={userId:id,password:pwd};
                    res.send("login");
                }else{
                    res.send("fail");
                }
            })
        }); 
    };

    this.doRegister = function(phoneNum,password,province,city,address,res){
        pool.getConnection(function(err,connection){
            var sql = 'INSERT INTO usermessage (userId,password,province,city,address,phone,level) VALUES (?,?,?,?,?,?,?)';
            connection.query(sql,[phoneNum,password,province,city,address,phoneNum,"普通会员"],function(err,result){
                connection.release();
                res.send("registerSuccess");
            });        
        });
    };

    this.isRegister = function(phoneNum,res){
        var rs;
        pool.getConnection(function(err,connection){
            var sql = 'SELECT phone FROM usermessage';
            connection.query(sql,function(err,result){
                for(var i=0;i<result.length;i++){
                    if(result[i].phone==phoneNum){
                        rs="wrongPhoneNumber";
                    }else{
                        rs="prepare";
                    }
                }
                res.send(rs);
                connection.release();
            });
        });
    }

    this.getUserMessage = function(id,res){
        pool.getConnection(function(err,connection){
            var sql = 'SELECT * FROM usermessage WHERE userId=?';
            connection.query(sql,id,function(err,result){
                res.send(result);
                connection.release();
            });
        })
    }

    this.getAllCities = function(res){
        pool.getConnection(function(err,connection){
            var sql = 'SELECT city FROM location';
            connection.query(sql,function(err,result){
                res.send(result);
                connection.release();
            });
        })
    }

    this.setAddress = function(province,city,address,id,res){
        pool.getConnection(function(err,connection){
            var sql = "UPDATE usermessage SET province=?,city=?,address=? WHERE userId=?";
            connection.query(sql,[province,city,address,id],function(err,result){
                res.send("success");
                connection.release();
            });
        })
    }

    this.getUserAddress = function(id,res){
        pool.getConnection(function(err,connection){
            var sql = "SELECT province,city,address FROM usermessage WHERE userId=?";
            connection.query(sql,id,function(err,result){
                res.send(result);
                connection.release();
            });
        })
    }

    this.check=function(user,pwd,callback){
        pool.getConnection(function(err,conn){
            var sql = "select * from macount where user=? and pwd=?";
            conn.query(sql,[user,pwd],function(err,rs){
                callback(rs.length);
                conn.release();
            })
        })
    }

    this.addP=function(title,start,end){
        pool.getConnection(function(err,conn){
            var sql="insert into paimai(title,start,end) values(?,?,?)";
            conn.query(sql,[title,start,end],function(err,rs){
                conn.release();
            })
        })
    }

    this.getP=function(callback){
        pool.getConnection(function(err,conn){
            var sql = "select * from paimai";
            conn.query(sql,function(err,rs){
                callback(rs);
                conn.release();
            })
        })
    }
    this.deleteP=function(value,callback){
        pool.getConnection(function(err,conn){
            var sql = "delete from paimai where title=?";
            conn.query(sql,[value],function(err,rs){
                callback("success");
                conn.release();
            })
        })
    }
    this.addS = function(title,sName,sPrice,sImg,isV,owner,callback){
        pool.getConnection(function(err,conn){
            var sql = "insert into shangpin(title,sName,sPrice,sImg,isV,owner) values(?,?,?,?,?,?)";
            conn.query(sql,[title,sName,sPrice,sImg,isV,owner],function(err,rs){
                callback("");
                conn.release();
            })
        })
    }

    this.getS=function(value,callback){
        pool.getConnection(function(err,conn){
            var sql = "select sName,sPrice,sImg,isV,owner from shangpin where title=?";
            conn.query(sql,value,function(err,rs){
                callback(rs);
                conn.release();
            })
        })
    }

    this.updatePrice = function(title,sName,sPrice,owner,callback){
        pool.getConnection(function(err,conn){
            var sql = "update shangpin set sPrice=? , owner=? where title=? and sName=?";
            conn.query(sql,[sPrice,owner,title,sName],function(err,){
                callback("");
                conn.release();
            })
        })
    }

    this.updateIsV = function(title,sName,isV,callback){
        pool.getConnection(function(err,conn){
            var sql = "update shangpin set isV=? where title=? and sName=?";
            conn.query(sql,[isV,title,sName],function(err,rs){
                callback();
                conn.release();
            })
        })
    }

    this.getAuction = function(res){
        pool.getConnection(function(err,conn){
            var sql = "SELECT * FROM paimai";
            conn.query(sql,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.getAuctionCommodities = function(res,title){
        pool.getConnection(function(err,conn){
            var sql = "SELECT * FROM shangpin WHERE title=?";
            conn.query(sql,title,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.getAllRecord = function(res){
        pool.getConnection(function(err,conn){
            var sql = "SELECT * FROM shangpin";
            conn.query(sql,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.cartDetail = function(res){
        pool.getConnection(function(err,conn){
            var sql = "SELECT * FROM shangpin";
            conn.query(sql,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.getNews = function(title,res){
        pool.getConnection(function(err,conn){
            var sql = "SELECT * FROM news WHERE newsTitle = ?";
            conn.query(sql,title,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.getAllUsers = function(res){
        pool.getConnection(function(err,conn){
            var sql = "SELECT * FROM usermessage";
            conn.query(sql,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.getUser = function(keyWord,res){
        pool.getConnection(function(err,conn){
            var sql1 = "SELECT * FROM usermessage WHERE userId=?";
            conn.query(sql1,keyWord,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.vipChange = function(value,userId){
        pool.getConnection(function(err,conn){
            var sql1 = "UPDATE usermessage SET level=? where userId=?";
            conn.query(sql1,[value,userId],function(err,rs){
                conn.release();
            })
        })
    }

    this.getlevel = function(userId,res){
        pool.getConnection(function(err,conn){
            var sql1 = "SELECT level FROM usermessage WHERE userId=?";
            conn.query(sql1,userId,function(err,rs){
                conn.release();
                res.send(rs);
            })
        })
    }

    this.successBuy = function(sName){
        pool.getConnection(function(err,conn){
            var sql1 = "UPDATE shangpin SET owner='none' where sName=?";
            conn.query(sql1,sName,function(err,rs){
                conn.release();
            })
        })
    }

    this.delUserId = function(delUserId){
        pool.getConnection(function(err,conn){
            var sql1 = "DELETE from usermessage where userId=?";
            conn.query(sql1,delUserId,function(err,rs){
                conn.release();
            })
        })
    }
}
module.exports = databaseOperator;