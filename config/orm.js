var connection = require('./connection.js');

var orm = function(){
    if(!(this instanceof orm)){
        return new orm()
    }
    else{
        this.selectAll = function(fn){
            connection.query("SELECT * FROM burgers", function(err,data){
                if(err) throw err;
                fn(data)
            })
        };

        this.insertOne = function(name,fn){
            var pic = picURL();
            connection.query('INSERT INTO burgers (burger_name,avatar) VALUES(?,?)',[name,pic], function(err){
                if(err) throw err;
                fn()
            })
        };

        this.updateOne = function(id,attr,fn){
            connection.query('UPDATE burgers SET id=? WHERE ?'), [id,row], function(err,data){
                if(err) throw err;
                fn(data)
            }
        };
    };
};

function picURL(){
    var randNum = Math.floor(Math.random() *10) + 1;
    var url = '/img/avatar/avBurger'+randNum+'.png';
    return url
}

module.exports = orm;