function person(name) {this.name = name;}
 person.prototype.sayHi = function() {console.log('hello ' + this.name);}
const me = new person("aryan");
const human = new person("prakash");
const fruit = new person("berry")
me.sayHi();
human.sayHi();
fruit.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype)
console.log(Object.getPrototypeOf(human) === person.prototype)
console.log(me.sayHi === human.sayHi);



// example

function animal(breed ){ this.breed= breed;}
animal.prototype.bark = function(){console.log('bow bow'     +this.breed );}
animal.prototype.shout= function(){console.log('mewo mewo'   +this.breed);}
const dog = new animal("   puppy");
const cat = new animal("  pilli");
dog.bark();
cat.shout();
console.log(Object.getPrototypeOf(dog) ===animal.prototype);
console.log(Object.getPrototypeOf(cat) ===animal.prototype);
console.log(dog.bark === cat.shout )

