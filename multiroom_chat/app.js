/* import configuration server */
var app = requite('./config/server');

/* port listen */
app.listen(80, function(){
    console.log('Servidor Online!');
});

