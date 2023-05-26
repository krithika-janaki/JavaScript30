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

function testForThis() {
 console.log(' i am the this when called with the call function => ', this);
 setTimeout(function() {
    console.log('i am this inside setTimeout', this);
 }, 1)

 setTimeout(() => {
    console.log('i am this inside setTimeout arrow func', this);
 }, 1)
 return () => {
    console.log('i am the arrow function inside the function that was called with this', this);
 }
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

  
