// methods to parse auction page for 1 item
var http = require('https');
var htmlParser = require('./node-htmlparser-master');
var htmlSoup = require('./html-soup-master');
var util = require('util');



function output(dom) {
    //var y = htmlSoup.select(dom, 'script', type='application/json', id='application-state')
    var y = htmlSoup.select(dom, '#application-state')
    var payload = y.values().next().value.children[0].text;
    payload = JSON.parse(payload);
    
    var orders = payload['payload']['orders'];
    for (var i in payload) {
        console.log(i, payload[i]);
    }

    for (var j = 0; j < min(10,orders.length); j++) {
        console.log(orders[j]);
    }
    
}

function getUrl(url) {
    var request = http.request({ host : 'warframe.market', path:'/items/dakra_prime_set' }, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            var dom = htmlSoup.parse(data);
            output(dom);
            console.log("end");
        });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });
    request.end();
}

getUrl('blubb');
console.log('Finish');