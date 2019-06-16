var connection;

exports.connection = (x)=>{
    connection = x;
}

function consulta (x) {
    return new Promise((resolve, reject) => {
        const query = x;
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    }
    )
}

function consulta (x, y) {
    return new Promise((resolve, reject) => {
        const query = x;
        connection.query(query, y, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    }
    )
}

exports.execQuery = (query) => {
    return consulta(query).then(result => {
        if(query.indexOf('call')==-1){
            return result;
        }
        return result[0];
    })
}

exports.execQuery = (query, data) => {
    return consulta(query, data).then(result => {
        if(query.indexOf('call')==-1){
            return result;
        }
        return result[0];
    })
}