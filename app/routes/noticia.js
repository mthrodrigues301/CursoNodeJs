module.exports = function(app){    
    
    app.get('/noticia', function(req, res){
        
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasmodel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticia", {noticia : result});        
        });
    });
}