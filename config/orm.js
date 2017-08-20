var connection = require('./connection.js');

var orm = {
    all: function(table,fn){
        connection.query("SELECT * FROM ?? ORDER BY date DESC",[table], function(err,data){
            if(err) throw err;
            fn(data)
        })
    },

    find: function(table,id,fn){
        connection.query("SELECT * FROM ?? WHERE id=?",[table,id], function(err,data){
            if(err) throw err;
            fn(data)
        })
    },

    insertOne: function(table,name,pic,fn){
        connection.query('INSERT INTO ?? (burger_name,avatar) VALUES(?,?)',[table,name,pic], function(err){
            if(err) throw err;
            fn()
        })
    },

    updateOne: function(table,col,val,id,fn){
        connection.query('UPDATE ?? SET ??=? WHERE id=?', [table,col,val,id], function(err,data){
            if(err) throw err;
            fn(data)
        })
    },
    
    updateTwo: function(table,col1,val1,col2,val2,id,fn){
        connection.query('UPDATE ?? SET ??=?, ??=? WHERE id=?', [table,col1,val1,col2,val2,id], function(err,data){
            if(err) throw err;
            fn(data)
        })
    },

    deleteOne: function(table,id,fn){
        connection.query('DELETE FROM ?? WHERE id=?',[table,id],function(err,data){
            if(err) throw err;
            fn(data);
        })
    }
};


module.exports = orm;