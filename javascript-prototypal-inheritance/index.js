function Bear(type) {
  this.type = type
}
Bear.prototype.growl = function() {
  console.log('The ' + this.type + ' bear says grrr')
}

function Grizzly() {
  Bear.call(this, 'grizzly')
}
Grizzly.prototype = Object.create(Bear.prototype)
// Grizzly.prototype.growl = function() {
//   console.log('on the Grizzly.prototype')
// }


Object.defineProperty(Grizzly.prototype, "constructor",{
    enumerable:false,
    value:Grizzly,
    writtable:true
})

/*Why above code? your code will fail if someone does this*/
//var grizzly = new Grizzly()
//var g2 =  new grizzly.constructor();
//grizzly.constructor === Grizzly; //this should be true, with new changes this becomes true


//var grizzly = new Bear('grizzly')

var grizzly = new Grizzly()
var polar = new Bear('polar')


//grizzly.growl = function() { console.log('override') }
console.log(grizzly.growl())


