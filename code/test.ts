const x: number = 3;
console.log(x);

//*************************************** */

//Optional Chaining and bang
//So here what it means is Optional chaining will move to the chained operation only if the value exists
//But the bang will move up the chain even if the value is present or undefined

const arr = [[{"name":"john"}]];

const res = arr.pop()?.pop()?.name; //Optional chaining

//commenting this as this is only valid for ts and not for js
// const res1 = arr.pop()!.pop()!.name; //bang


/**
 * functions in function
 * So we can create a common function which takes functions of same structure and
 *  param length and compute it instead of calling each and every function separately 
 */
function add(x: number, y: number): number{
    return x + y;
}

function sub(x: number, y: number): number{
    return x - y;
}

function doMath(funcs: ((x: number, y: number) => number)[], values: [number, number][]): number[]{
    let results = [] as number[];
    for(let i = 0 ; i < funcs.length ; i++){
        let args = values[i]!;
        let result = funcs[i]!(args[0], args[1]);
        results.push(result);
    }

    return results;
}

console.log(doMath([add, sub], [[2,3], [6,4]]));

/**
 * overloaded functions
 */

function calcArea(x: number): number;
function calcArea(x: number, y: number): number;
function calcArea(x: number, y?: number): number {
    return y ? x * y : x * x;
}

console.log(calcArea(1));
console.log(calcArea(2,4));

/**
 * Interfaces
 * 
 * These are like creating custom types but suitable for objects
 */

interface Person{
    name: String
    age: number
}

interface Employee extends Person{
    empId: number
}

const emp1: Employee = {
    name: "Tejas",
    age: 25,
    empId: 1267
}

const emp2: Employee = {
    name: "Kumar",
    age: 25,
    empId: 1269
}

function getAllEmpNames(emps: Person[]): String[]{
    let empNames = [] as String[]
    for (const emp of emps) {
        empNames.push(emp.name);
    }

    return empNames;
}

console.log(getAllEmpNames([emp1, emp2]));