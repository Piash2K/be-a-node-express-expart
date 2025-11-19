// common js to esm
// const { a } = require("./M09P01F1");


import {a} from "./M09P02F1_es2.mjs" 
import {a as x} from "./M09P02F1_es3.mjs" 
// import { subs } from "./utils"
// const { a: x } = require("./M09P01F3");

// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");

// const {add,subs} = require("./utils");
// console.log(a, x);
// console.log(add(x, a));
// console.log(subs(x, a));
// console.log(a,x)

import utils from './utils_esm/index.mjs'

console.log(utils.add(2,3))
console.log(utils.biyog(x,a))