var express = require('express'),
    app = express();

app.configure(function(){
    // create alias to serve static content for 
    // src & media
    app.use('/src', express.static(__dirname+'/src'));
    app.use('/media', express.static(__dirname+'/media'));
    
    // create a directory file view at root url
    // can then select which html file to view
    // http://stackoverflow.com/questions/6294186/express-js-any-way-to-display-a-file-dir-listing 
    var hourMs = 1000*60*60;
    app.use(express.static(__dirname, { maxAge: hourMs }));
    app.use(express.directory(__dirname));
    app.use(express.errorHandler());

});

var port = 5975;
app.listen(port);
console.log('File Server started on port %s', port);
