/*
REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
*/
// Java Like
var thisGenerator = function(){
  var max = 1000;

  this.generate = function(){
    console.log(max);
  };
};

var this1 = new thisGenerator();
var this2 = new thisGenerator();

console.log(this1.generate === this2.generate);
console.log(this1);
console.log(this2);

// Prototype
console.log('------------------');
function protoGenerator(){
  var max = 1000;
}
protoGenerator.prototype.generate = function(){
  console.log(this.max);
};

var sg1 = new protoGenerator();
var sg2 = new protoGenerator();

console.log(sg1.generate === sg2.generate);
console.log(sg1);
console.log(sg2);