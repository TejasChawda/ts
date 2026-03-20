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

// Without generics
class DataStoreNumber {
    private items: number[] = [];

    addItem(item: number) {
        this.items.push(item);
    }

    getItem(index: number): number | undefined {
        return this.items[index];
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
    }

    getAllItems(): number[] {
        return [...this.items];
    }
}

// With generics
class DataStore<T> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }

    getItem(index: number): T | undefined {
        return this.items[index];
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return [...this.items];
    }
}

//Now while creating the object, we can specify the data type and call the methods

let data = new DataStore<string>();
data.addItem("Hello");
console.log(data.getAllItems());

let data1 = new DataStore<number>();
data1.addItem(1);
console.log(data1.getAllItems());

/********************************************************************************************* */

/**
 * Type Aliases
 * We can create custom types for non objects
 */

type CoOrdinates = [number, number];

function getCoOrdinates(x:number, y:number): CoOrdinates{
    return [x,y];
}

console.log(getCoOrdinates(2,3));

/********************************************************************************************* */
