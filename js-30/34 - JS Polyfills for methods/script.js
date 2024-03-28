Array.prototype.myMap = function (callback) {
let result = [];

for(let i=0; i < this.length;i++) {
    result.push(callback(this[i], i, this))
}
return result;
}

console.log([1,2,3].myMap((ele) => {return ele * 2}));

Array.prototype.myFilter = function (callback) {
    let result = [];
    
    for(let i=0; i < this.length;i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
    }
    
console.log([1,2,3].myFilter((ele) => {return ele < 3}));

Array.prototype.myFlat = function (depth = 1) {
    let result = [];
   
    for(let i=0; i < this.length;i++) {
        debugger;
        if(Array.isArray(this[i]) && depth > 0) {
            result = [...result, ...this[i]];
            depth--;

        } else {
            result.push(this[i]);
        }
    }
    return result;
}

console.log([0, 1, 2, [[[3, 4]]]].flat(2));

const obj = {
    name: 'Krithika'
};

const but = document.querySelector('button');

function testForThis() {
 console.log(' 1 i am the this when called with the call function => ', this);

 but.addEventListener('click', function() {
    console.log('this inside add event listener', but)

    window.addEventListener('click', function() {
        console.log('this should be window', this)
    }.bind(this))
 })
 setTimeout(function() {
    console.log('2 i am this inside setTimeout', this);
 }, 1)

 setTimeout(() => {
    console.log(' 3 i am this inside setTimeout arrow func', this);
 }, 1)
 function returnFunc() {
    console.log('4 i am the arrow function inside the function that was called with this', this);
 }

 return returnFunc.bind(this);
}

const test = testForThis.call(obj);
test();

function myThrottle(func, wait) {
    let flag = true;
    return function(...args) {
    if(flag) {
      func.apply(this, ...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, wait)
    }
    }
  }


  function myDebounce(func, wait) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, [...args])
        }, delay)
    }
  };

  function Blah(name) {
    console.log('tt', this);
    this.name = name;

    this.func = () => {
        console.log('this with arrow func', this.name);
    }
  }
const nn = new Blah('tommy');
console.log(nn.func());

/*new keyword

It does 5 things:

It creates a new object. The type of this object is simply object.
It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
It makes the this variable point to the newly created object.
It executes the constructor function, using the newly created object whenever this is mentioned.
It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
Note: constructor function refers to the function after the new keyword, as in

new ConstructorFunction(arg1, arg2)
Once this is done, if an undefined property of the new object is requested, the script will check the object's [[prototype]] object for the property instead. This is how you can get something similar to traditional class inheritance in JavaScript.

The most difficult part about this is point number 2. Every object (including functions) has this internal property called [[prototype]]. It can only be set at object creation time, either with new, with Object.create, or based on the literal (functions default to Function.prototype, numbers to Number.prototype, etc.). It can only be read with Object.getPrototypeOf(someObject). There is no other way to get or set this value.

Functions, in addition to the hidden [[prototype]] property, also have a property called prototype, and it is this that you can access, and modify, to provide inherited properties and methods for the objects you make.

Here is an example:

ObjMaker = function() { this.a = 'first'; };
// `ObjMaker` is just a function, there's nothing special about it
// that makes it a constructor.

ObjMaker.prototype.b = 'second';
// like all functions, ObjMaker has an accessible `prototype` property that 
// we can alter. I just added a property called 'b' to it. Like 
// all objects, ObjMaker also has an inaccessible `[[prototype]]` property
// that we can't do anything with

obj1 = new ObjMaker();
// 3 things just happened.
// A new, empty object was created called `obj1`.  At first `obj1` 
// was just `{}`. The `[[prototype]]` property of `obj1` was then set to the current
// object value of the `ObjMaker.prototype` (if `ObjMaker.prototype` is later
// assigned a new object value, `obj1`'s `[[prototype]]` will not change, but you
// can alter the properties of `ObjMaker.prototype` to add to both the
// `prototype` and `[[prototype]]`). The `ObjMaker` function was executed, with
// `obj1` in place of `this`... so `obj1.a` was set to 'first'.

obj1.a;
// returns 'first'
obj1.b;
// `obj1` doesn't have a property called 'b', so JavaScript checks 
// its `[[prototype]]`. Its `[[prototype]]` is the same as `ObjMaker.prototype`
// `ObjMaker.prototype` has a property called 'b' with value 'second'
// returns 'second'
It's like class inheritance because now, any objects you make using new ObjMaker() will also appear to have inherited the 'b' property.

If you want something like a subclass, then you do this:

SubObjMaker = function () {};
SubObjMaker.prototype = new ObjMaker(); // note: this pattern is deprecated!
// Because we used 'new', the [[prototype]] property of SubObjMaker.prototype
// is now set to the object value of ObjMaker.prototype.
// The modern way to do this is with Object.create(), which was added in ECMAScript 5:
// SubObjMaker.prototype = Object.create(ObjMaker.prototype);

SubObjMaker.prototype.c = 'third';  
obj2 = new SubObjMaker();
// [[prototype]] property of obj2 is now set to SubObjMaker.prototype
// Remember that the [[prototype]] property of SubObjMaker.prototype
// is ObjMaker.prototype. So now obj2 has a prototype chain!
// obj2 ---> SubObjMaker.prototype ---> ObjMaker.prototype

obj2.c;
// returns 'third', from SubObjMaker.prototype

obj2.b;
// returns 'second', from ObjMaker.prototype

obj2.a;
// returns 'first', from SubObjMaker.prototype, because SubObjMaker.prototype 
// was created with the ObjMaker function, which assigned a for us
*/

  
