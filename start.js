var msg = 'Hello World';
console.log(msg);


const { version, array, objects, constants } = require('warframe-item-list');

console.log(version);   // returns the warframe game version of the item list.
console.log(array);     // returns a big list of every item.
console.log(objects);   // returns an object containing named lists and objects for more specific uses.
console.log(constants); // returns the constant keys used to define keys in the `array` and `objects`.
//console.log(warframeItemList);

var x = require('./list.json');

x = x['payload']
for (var i in x) {
    var key = i;
    console.log(key);
    console.log(x[key].length);
}

console.log(x['sell_orders'][0]);


console.log("Request ended");
console.log("Load weapon data");
var weaponData = require('./weaponData.json');
console.log("Search for primes");
var count = 0;
for (var i in weaponData['Weapons']) {
    var key = i;
    if (key.includes("Prime")) {
        console.log(key);
        count = count + 1;
    }
}
console.log(count + " prime weapon entries found");


//console.log(weaponData);
console.log("Finish");