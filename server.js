var fs = require("fs");
var nginx = require("./nginx");
var shell = require('shelljs');
var test = fs.readFileSync("./test.sh", {encoding: "utf8"});

var theanh = nginx.basic("theanh");
shell.exec(`echo "${theanh}" > /home/nta/Desktop/theanh`, function(code, output) {
    console.log('Exit code:', code);
    console.log('Program output:', output);
});
var list = shell.ls("/etc/nginx/sites-available");

console.log(list.stdout);