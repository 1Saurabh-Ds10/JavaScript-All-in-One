
/*
-------------------------------------------------------------------------------------------------------------
Problem Set 1:

--------------------------------------------------------------------------------------------------------------

*/

let x = 10;
if (function f() { }) {
  x += typeof f;
}
console.log(x);

// Output: "10undefined"


// new property version is created and assigned a value which gets printed
function Tool(name) {
  this.name = name || 'Yoman';
}

let tool1 = new Tool('Webpack')['version'] = '2.0';
console.log(tool1);

// Output: "2.0"



/*
-------------------------------------------------------------------------------------------------------------
Problem Set 2:

delete

'delete' only deletes the properties of the object and not the stand alone variable value
--------------------------------------------------------------------------------------------------------------

*/

const output = (function (x) {
  delete x;
  return x;
})(0);

// Output: 0     

let x = 1;
const output = (function () {
  delete x;
  return x;
})();

// Output: 1

const x = { foo: 1 };
const output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output);

// Output: undefined

//"delete" can not directly delete the properties present on prototype of the object
const Employee = {
  name: 'yoman'
}
const emp = Object.create(Employee);
delete emp.name;
console.log(emp.name);

// Output: "yoman"



/*
-------------------------------------------------------------------------------------------------------------
Problem Set 3:

Hoisting

--------------------------------------------------------------------------------------------------------------

*/

var count = 10;

(function () {
  console.log(`Original: ${count}`);

  var count = 100;

  console.log(`New: ${count}`);

})();

//Output: Original: undefined
//        New: 100


const count = 10;

(function () {
  console.log(`Original: ${count}`);

  let count = 100;

  console.log(`New: ${count}`);

})();

// Output: ReferenceError: count is not defined


var movie = 'The Dictator';
(function () {

  console.log(movie);
  let movie = 'Borat';

})();

// Output: ReferenceError: movie is not defined


var movie = 'The Dictator';
(function () {
  console.log(movie);
  {
    let movie = 'Borat';

  }
})();

// Output: "The Dictator"


var movie = 'The Dictator';

function getMovie() {
  movie = 'Borat';
  return;

  function movie() { }
}
getMovie();
console.log(movie);

// Output: "The Dictator"


function getMovie() {
  let movie = 'Borat';
  return;

  function movie() { }
}
getMovie();

// Output: "SyntaxError: Identifier 'movie' has already been declared


function movie() {
  getName();
  var name = 'MI 6';
  return;

  function getName() {
    console.log(name);
  }
}
movie();

// Output: undefined


function movie() {
  getName();
  let name = 'MI 6';
  return;

  function getName() {
    console.log(name);
  }
}
movie();

// Output: "ReferenceError: name is not defined"


(function foo() {
  bar();

  function bar() {
    moo();
    console.log(typeof moo);
  }

  function moo() {
    console.log(typeof bar);
  }
}());

// Output: "function" "function"

/*
-------------------------------------------------------------------------------------------------------------
Problem Set 4:

instanceof

It checks through the prototype chain
--------------------------------------------------------------------------------------------------------------

*/

function foo() {
  return foo;
}
let x = (new foo() instanceof foo);

console.log(x);

// Output: false


const name = new String("hello");
let x = (name instanceof String);

console.log(x);

// Output: true


// Implicitly return a new object
function foo() {

}
let x = (new foo() instanceof foo);

console.log(x);

// Output: true

/* checks through the prototype chain*/
let y = (new foo() instanceof Object);

// Output: true


/*
-------------------------------------------------------------------------------------------------------------
Problem Set 4:

check if the property is present in object

in & hasOwnProperty
--------------------------------------------------------------------------------------------------------------

*/


/*
'in' also searches in prototype of the object
*/
const obj = {
  name: 'Yoman',
  version: '1.0',
  type: {
    support: ['react']
  }
}

console.log('name' in obj); // Output: true
console.log('support' in obj); // Output: false
console.log('toString' in obj); // Output: true 

console.log(obj.hasOwnProperty('toSring')); // Output: false
console.log(obj.hasOwnProperty('name')); // Output: true
console.log(obj.hasOwnProperty('support')); // Output: false



/*
-------------------------------------------------------------------------------------------------------------
Problem Set 5:

Inheritance -> Object based and Prototypical

Object.create
3 properties: writable, configurable & enumerable
--------------------------------------------------------------------------------------------------------------

*/


/*

Object.create polyfill

*/
Object.create = function (proto) {

  function F() {

  }
  F.prototype = proto;

  return new F();
}



/*

Object based Inheritance

*/
const Car = {
  company: 'Tesla',
  getCompany: function () {
    return this.company;
  }
};

const newCar1 = Object.create(Car, {
  company: {
    value: 'iCar',
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(newCar1.getCompany()); // Output: "Tesla"

newCar1.getCompany = function () {
  return `New Company: ${this.company}`;
}

console.log(newCar1.getCompany()); // Output: "New Company: iCar"


/*

Prototypical Inheritance

Demo code

*/

function Movie(title, rating) {
  this.title = title;
  this.rating = rating;

}

Movie.prototype.getTitle = function () {
  return `${this.title}`;
};


const mov1 = new Movie('8 Mile', '5 star');

console.log(mov1.getTitle()); // Output: "8 Mile"


function MovieCast(actor) {
  this.actor = actor;
}

MovieCast.prototype = mov1;

const cast1 = new MovieCast('Eminem');

console.log(cast1.actor); // Output: "Eminem"

console.log(cast1.rating); // Output: "5 star"

console.log(cast1 instanceof MovieCast); // Output: true 
console.log(cast1 instanceof Movie); // Output: true 
console.log(mov1 instanceof MovieCast); // Output: false 
console.log(mov1 instanceof Movie); // Output: true 


/*
-------------------------------------------------------------------------------------------------------------
Problem Set 6:

Prevent Object modification

Prevent Extension, Seal & Freeze
--------------------------------------------------------------------------------------------------------------

*/


/*

Object.preventExtensions

Existing properties and methods of the object can be changed but no new methods or properties can be added

*/
const movie = {
  name: 'The Dictator',
  ratings: '5 star'
};


Object.preventExtensions(movie);


movie.name = 'Borat';

console.log(movie.name); // Output: "Borat"


movie.genre = 'comedy';

console.log(movie.genre); // Output: undefined or "TypeError: Cannot add property genre, object is not extensible" in strict mode



/*

Object.seal

Existing properties and methods of the object can be changed but no new methods or properties can be added
Existing properties and methods can not be deleted

*/
const movie = {
  name: 'The Dictator',
  ratings: '5 star'
};


Object.seal(movie);

console.log(Object.isExtensible(movie)); // Output: false
console.log(Object.isSealed(movie)); // Output: true

delete movie.ratings;  // Error in strict mode
movie.genre = 'comedy';  // Error in strict mode

console.log(movie.genre); // Output: undefined


/*

Object.freeze

Existing properties and methods of the object can Not be changed
No new methods or properties can be added
Existing properties and methods can not be deleted

All properties and methods become read-only

*/

const movie = {
  name: 'The Dictator',
  ratings: '5 star'
};


Object.freeze(movie);
Object.seal(movie);

console.log(Object.isExtensible(movie)); // Output: false
console.log(Object.isSealed(movie)); // Output: true
console.log(Object.isFrozen(movie)); // Output: true


delete movie.ratings;  // Error in strict mode
movie.genre = 'comedy';  // Error in strict mode
movie.name = 'Borat'; // Error in strict mode

console.log(movie.name); // Output: "The Dictator"
console.log(movie.genre); // Output: undefined



/*
-------------------------------------------------------------------------------------------------------------
Problem Set 7:

Object methods 

Object.assign, Object.keys, Object.defineProperty, Object.defineProperties
--------------------------------------------------------------------------------------------------------------

*/


/*

Object.assign is used to merge two or more objects
Object.keys returns an array containing all the properties & methods of the object
Object.defineProperty & Object.defineProperties create properties of an object
*/

const drink = {
  type: 'Green Tea',
  flavour: 'Aloe-Vera'
};

const beverage = {
  beverageType: 'Hot',
  cheers: function () {
    return 'cheers...';
  }
};


let obj = Object.assign({}, drink, beverage);

Object.defineProperty(obj, 'company', {
  value: 'Tetley',
  enumerable: false,
  writable: false,
  extensible: false

});

Object.defineProperties(obj, {
  color: {
    value: 'lime',
    enumerable: false
  },
  taste: {
    value: 'Best',
    enumerable: false
  }
})

console.log(obj); // Output: Object with all 4 properties

const keys = Object.keys(obj);

console.log(keys); // Output: ["type", "flavour", "beverageType", "cheers"]

obj.color = 'transparent lime'; // Error in Strict mode
console.log(obj.color); // Output: "lime"




/*
-------------------------------------------------------------------------------------------------------------
Problem Set 8:

Object comparision


--------------------------------------------------------------------------------------------------------------

*/

const foo1 = {

  bar: 'bas'
};

const foo2 = {

  bar: 'bas'
};

console.log(foo1 == foo2); // Output: false
console.log(foo1 === foo2); // Output: false

const foo = {
  p1: 'bar'
}

console.log(foo === foo); // Output: true


const foo3 = new Object({
  bar: 'bas'
});

const foo4 = new Object({
  bar: 'bas'
});

console.log(foo3 == foo4); // Output: false
console.log(foo3 === foo4); // Output: false


const foo5 = Object.create({
  bar: 'bas'
});

const foo6 = Object.create({
  bar: 'bas'
});

console.log(foo5 == foo6); // Output: false
console.log(foo5 === foo6); // Output: false


const obj = Object.create({
  foo: 'foo'
})

const obj1 = Object.create(obj);

console.log(obj1 == obj); // Output: false
console.log(obj1 === obj); // Output: false

const obj2 = obj;

console.log(obj2 === obj); // Output: true

console.log(String(obj1) == String(obj)); // Output: true
console.log(String(obj1) === String(obj)); // Output: true



/*
-------------------------------------------------------------------------------------------------------------
Problem Set 9:

Object


--------------------------------------------------------------------------------------------------------------

*/

(function () {
  const obj1 = Object.create({
    foo: 'foo'
  });

  const obj2 = obj1;

  obj2.foo = 'bar';

  console.log(obj1.foo); // Output: "bar"
  console.log(obj2.foo); // Output: "bar"

  delete obj2.foo;

  console.log(obj1.foo); // Output: "foo"
  console.log(obj2.foo); // Output: "foo"

  const obj3 = {

    foo: 'foo'
  };

  const obj4 = obj3;

  obj4.foo = 'bar';

  delete obj4.foo;

  console.log(obj3.foo); // Output: undefined
  console.log(obj4.foo); // Output: undefined

}());


/*
-------------------------------------------------------------------------------------------------------------
Problem Set 10:

Array


--------------------------------------------------------------------------------------------------------------

*/

(function () {

  const arr = new Array(0, 1, 2, 3, 4, 5, 6);

  arr[10] = 10;

  delete arr[10];

  console.log(arr.length); // Output: 11

  const arr2 = [1, 2];

  arr2.push(3, 4, 5);

  console.log(arr2); // Output: [1, 2, 3, 4, 5]

  arr2.unshift(0);

  console.log(arr2); // Output: [0, 1, 2, 3, 4, 5]

  console.log(arr.indexOf(2)); // Output: 2
  console.log(arr.indexOf('2')); // Output: -1

  arr2.push({ foo: 'foo' });
  arr2.push([1]);


  console.log(arr2.indexOf({ foo: 'foo' })); // Output: -1
  console.log(arr2.indexOf([1])); // Output: -1


  const arr3 = [1, 2, 3, 4];

  console.log(arr3.slice(1)); // Output: [2, 3, 4]
  console.log(arr3.slice(1, 3)); // Output: [2, 3]
  console.log(arr3.slice()); // Output: [1, 2, 3, 4]
  console.log(arr3.slice(1, 1)); // Output: []

  /* splice modifies the original array */
  console.log(arr3.splice(1)); // Output: [2, 3, 4]
  console.log(arr3); // Output: [1]

}());



/*
-------------------------------------------------------------------------------------------------------------
Problem Set 11:

Function


--------------------------------------------------------------------------------------------------------------

*/



function func(par1, par2, par3, par4) {

  console.log(this.prop);  // Output: undefined
  console.log(func.prop);  // Output: "func prop"

  console.log(func.length); // Output: 4
}
func.prop = "func prop";

func();





var movie = 'Spider Man';

function Movie() {
  this.movie = 'The Dark Knight';
}



console.log(new Movie().movie); // Output: "The Dark Knight"

Movie.prototype.movie = 'Iron Man';

console.log(new Movie().movie);  // Output: "The Dark Knight"





