module.exports = function(app){
    app.get('/', function(req, res){
        app.app.controlers.home.index(app, req, res);
    });
}