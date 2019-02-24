/* import configuration server */
var app = require('./config/server');

/* port listen */
app.listen(80, function(){
    console.log('Servidor Online!');
});

