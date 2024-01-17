function Person(name, age) {
    this.name = name
    this.age = age
}

Object.prptotype.hello = function () {
    console.log('Object: Hello ' + this.name)
}

const bob = new Person('Bob', 18)
bob.hasOwnProperty('')
console.log(result)
console.log('name' in bob)
console.log('hasOwnProperty' in bob)