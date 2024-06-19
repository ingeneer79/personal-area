var http = require('http');
var ODataServer = require('simple-odata-server');

var model = {
    namespace: "jsreport",
    entityTypes: {
        "UserType": {
            "_id": {"type": "Edm.String", key: true},
            "test": {"type": "Edm.String"},            
        }
    },   
    entitySets: {
        "users": {
            entityType: "jsreport.UserType"
        }
    }
};

var odataServer = ODataServer("http://localhost:1337")
    .model(model)

http.createServer(odataServer.handle.bind(odataServer)).listen(1337);