module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('nome','Nome não pode ser vazio!').notEmpty();
    req.assert('usuario','Usuario não pode ser vazio!').notEmpty();
    req.assert('senha','Senha não pode ser vazio!').notEmpty();
    req.assert('casa','Casa não pode ser vazio!').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('cadastro', {validacao: errors, dadosForm: dadosForm});
        return;
    }

    res.send('podemos cadastrar');
}