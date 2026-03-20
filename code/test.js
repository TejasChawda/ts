"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = 3;
console.log(x);
//*************************************** */
//Optional Chaining and bang
//So here what it means is Optional chaining will move to the chained operation only if the value exists
//But the bang will move up the chain even if the value is present or undefined
const arr = [[{ "name": "john" }]];
const res = arr.pop()?.pop()?.name; //Optional chaining
//commenting this as this is only valid for ts and not for js
// const res1 = arr.pop()!.pop()!.name; //bang
/**
 * functions in function
 * So we can create a common function which takes functions of same structure and
 *  param length and compute it instead of calling each and every function separately
 */
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function doMath(funcs, values) {
    let results = [];
    for (let i = 0; i < funcs.length; i++) {
        let args = values[i];
        let result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
console.log(doMath([add, sub], [[2, 3], [6, 4]]));
function calcArea(x, y) {
    return y ? x * y : x * x;
}
console.log(calcArea(1));
console.log(calcArea(2, 4));
const emp1 = {
    name: "Tejas",
    age: 25,
    empId: 1267
};
const emp2 = {
    name: "Kumar",
    age: 25,
    empId: 1269
};
function getAllEmpNames(emps) {
    let empNames = [];
    for (const emp of emps) {
        empNames.push(emp.name);
    }
    return empNames;
}
console.log(getAllEmpNames([emp1, emp2]));
//# sourceMappingURL=test.js.map