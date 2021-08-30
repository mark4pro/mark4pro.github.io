var pushScript = setInterval(function(){FunctionArray.push(test);clearInterval(pushScript);},10);
var bitch = 1;
function test() {
if (bitch == 1) {
console.log("test");
bitch = 0;
}
}