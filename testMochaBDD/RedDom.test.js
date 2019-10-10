const expect = require('chai').expect;
const assert =require('chai').assert;
const RedCss = require('../dist/RedDom.min');
const fs = require("fs");
const data = fs.readFileSync("./testMochaBDD/RedDom.run.js","utf8",function (err,data){console.log(err)});
console.log("data");
eval(data);