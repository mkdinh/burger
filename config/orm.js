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

        this.insertOne = function(row,fn){
            connection.query('INSERT INTO burgers (burger_name) VALUES ?',[row], function(err, data){
                if(err) throw err;
                fn(data)
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

module.exports = orm;