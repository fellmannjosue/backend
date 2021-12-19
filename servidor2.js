/*suma*/

var http = require('http');
var url = require('url');


http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var q = url.parse(req.url, true);
    var qdata = q.query;
    res.write("numero 1 es:" + (qdata.num1)+"<br>");
    res.write("numero 2 es: " + (qdata.num2)+"<br>"
    +"<br>");
    res.write("numero 3 es:" + (qdata.num3) + "<br>");
    res.write("numero 4 es: " + (qdata.num4) + "<br>");
    var suma = parseFloat(qdata.num1) + parseFloat(qdata.num2) + "<br>";
    +"<br>"
    var resta = parseFloat(qdata.num3) - parseFloat(qdata.num4 + "<br>");
    res.write(suma.toString());
    res.write(resta.toString());

    res.end('');

     
    
}).listen(5000);