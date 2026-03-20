"use strict";
/**
 * Generics
 *
 * Problem:
 * We create a class that works only with the `number` type.
 * If we want the same functionality for other types (e.g., string),
 * we would need to rewrite the class.
 *
 * Solution:
 * Generics allow us to write reusable and type-safe code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Without generics
class DataStoreNumber {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return [...this.items];
    }
}
// With generics
class DataStore {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return [...this.items];
    }
}
//Now while creating the object, we can specify the data type and call the methods
let data = new DataStore();
data.addItem("Hello");
console.log(data.getAllItems());
let data1 = new DataStore();
data1.addItem(1);
console.log(data1.getAllItems());
function getCoOrdinates(x, y) {
    return [x, y];
}
console.log(getCoOrdinates(2, 3));
//# sourceMappingURL=advanced.js.map