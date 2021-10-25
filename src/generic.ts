// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 2000)
// })

// promise.then(data => {
//   console.log(data.toLowerCase().trim().toUpperCase())
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Valeriya' }, { age: 26 })
console.log(merged)
console.log(merged.name)
console.log(merged.age)

const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 })
console.log(merged2.model)

// const merged3 = mergeObjects('aa', 'bb')
// console.log(merged3)

// ===============

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `Here is ${value.length} characters`
  }
}

console.log(withCount('Hello Typzscript'))
console.log(withCount([1, 2, 3, 40]))
// console.log(withCount(20))
console.log(withCount({ length: 20 }))

// =================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Valeriya',
  age: 29,
  job: 'frontend developper'
}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
console.log(getObjectValue(person, 'job'))

// =================
class Collection<T extends string | number | boolean> {
  // class Collection<T> {
  // private __items: T[] = []
  constructor(private __items: T[] = []) { }
  add(item: T) {
    this.__items.push(item)
  }
  remove(item: T) {
    this.__items = this.__items.filter(i => i !== item)
  }

  get items() {
    return this.__items
  }

}

// const strings = new Collection<string>(['I', 'am', 'strings'])
const strings = new Collection(['I', 'am', 'strings'])
strings.add('!')
strings.remove('am')
console.log(strings.items)

// const numbers = new Collection<number>([1, 2, 3])
const numbers = new Collection([1, 2, 3])
numbers.add(4)
numbers.remove(2)
console.log(numbers.items)

// const objs = new Collection([{ a: 1 }, { b: 2 }])
// objs.remove({ b: 2 })
// console.log(objs.items)


// ============

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}
  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }
  return car as Car
}

