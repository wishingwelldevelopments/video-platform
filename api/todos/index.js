const getTodos = require('./get');

exports.handler = async function(event, context){
    var method = event.httpMethod
    var url = event.path
    var params = event.queryStringParameters

    if (JSON.stringify(params.key) == '"d3b07384d113edec49eaa6238ad5ff00"') {
        if (method == "GET" && url == "/api/todos/get") return getTodos()
    } else {
        return {
            statusCode: 500,
            body: JSON.stringify({error:'Unauthenticated'})
        }
    }

}
