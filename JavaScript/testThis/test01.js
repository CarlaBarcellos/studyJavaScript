// 'user strict';
// Java Like
var SerealGenerator = function(){
  var max = 1000;

  this.generate = function(){
    return Math.floor(Math.random() * max);
  };
};

var obj1 = new SerealGenerator();
var obj2 = new SerealGenerator();

console.log(obj1.generate === obj2.generate);

// Prototype
function sGenerator(){
  var max = 1000;
}
sGenerator.prototype.generate = function(){
  return Math.floor(Math.random() * this.max);
};

var sg1 = new sGenerator();
var sg2 = new sGenerator();

console.log(sg1.generate === sg2.generate);