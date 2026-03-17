const x: number = 3;
console.log(x);

//*************************************** */

//Optional Chaining and bang
//So here what it means is Optional chaining will move to the chained operation only if the value exists
//But the bang will move up the chain even if the value is present or undefined

const arr = [[{"name":"john"}]];

const res = arr.pop()?.pop()?.name; //Optional chaining
const res1 = arr.pop()!.pop()!.name; //bang