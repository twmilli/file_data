"use strict"
require("babel-register");
const app = require("./server/app.js").app;
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'));
});