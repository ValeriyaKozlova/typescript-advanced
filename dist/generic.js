"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Valeriya' }, { age: 26 });
console.log(merged);
console.log(merged.name);
console.log(merged.age);
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
console.log(merged2.model);
function withCount(value) {
    return {
        value,
        count: `Here is ${value.length} characters`
    };
}
console.log(withCount('Hello Typzscript'));
console.log(withCount([1, 2, 3, 40]));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Valeriya',
    age: 29,
    job: 'frontend developper'
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));
class Collection {
    constructor(__items = []) {
        this.__items = __items;
    }
    add(item) {
        this.__items.push(item);
    }
    remove(item) {
        this.__items = this.__items.filter(i => i !== item);
    }
    get items() {
        return this.__items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.remove('am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.remove(2);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford, Audi'];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map