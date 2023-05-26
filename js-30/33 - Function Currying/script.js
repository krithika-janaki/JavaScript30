import { con } from "lodash";

function join(a, b, c) {
    return `${a}_${b}_${c}`
}
/* should be able to call this as curriedJoin(1,2,3)/ curriedJoin(1)(2,3)/ curriedJoin(1)(2)(3) */

function curry(func) {
return function curried(...args) {
// 1. if enough args, call func 
// 2. if not enough, bind the args and wait for new one

if (args.length >= func.length) {
console.log('func', func);
console.log('args', args);
console.log('this keyword', this);
return func(args)
} else {
// 1,2
console.log('thisin curried', this);
return curried.bind(this, ...args)
}
   
}
}


const curriedJoin = curry(join);
console.log(curriedJoin(1)(2,3));