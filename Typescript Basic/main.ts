// -> TypeScript is an open source programming language from microsoft.
// -> It is Typed Superset of JavaScript.
// -> It compiles down to plain JavaScript.
// -> Optional static typing and type Inference
// -> IDE support, Rapid growth and use. 

export { }
let message = 'Welcome Back'
console.log(message)

//variables declarations
//-----------------------
let i = 10
// let i = 11 // -> Cannot redeclare block-scoped variable 'i'.
i = 20
console.log(i)

// const title; // -> 'const' declarations must be initialized.
const title = 'Codevolution'
console.log('Title: ', title)

//variables types (string, boolean, number, any, unknown)
//---------------------------------------------------------
let value: number = 20
let name: string = 'Vishwas'
let isBeginner: boolean = true
console.log(value, name, isBeginner)

let sentence: string = `My name is ${name}
and I am a beginner in TypeScript`

console.log(sentence)

let n: null = null
let u: undefined = undefined

//this both declarations are of no use and hence we can use null and undefined types as
//subtypes for either string/number/boolean

let isHoliday: boolean = null
let myName: string = undefined

// 2 ways of Array declarations
//------------------------------
let list1: number[] = [1, 2, 3, 4, 5]
let list2: Array<number> = [10, 20, 30]

//tuple (fixed as per declaration & can store two diff types of values)
//----------------------------------------------------------------------
let person1: [string, number] = ['Steve', 55] // -> order is very important
console.log(person1)

//enum
//-----
enum Colors { Red, Green, Blue } //starts with 0
let c: Colors = Colors.Blue //2
console.log('Colors: ', c)

enum days { Monday = 5, Tuesday, Wednesday } //now starts with 5
let d: days = days.Tuesday //6
console.log('Days: ', d)

//any type
//---------

let variable: any = 10;
variable = 'Steve'
variable = true
console.log(variable) //true

//issues with any type 
//(to solve these issues 'unknown' type was introduced in TypeScript v3)
//------------------------------------------------------------------------
// console.log(variable.name)
// variable()
// variable.toUpperCase()

//unknown type
//-------------
let myVariable: unknown = 10;
// (myVariable as string).toUpperCase() // -> will throw an error, hence doing type assertion (type cast)

//Type Inference:
//----------------

// When we just declare a variable and assigns some value to it, based on the type of value we have assigned, TypeScript will simply internally make the variable of that type.
// But this happens only when variable is declared and assigned with some value.

let a = 10 // -> Internally makes type as number -> let a: number
// a = 'Ujjwal' // -> error: Type 'string' is not assignable to type 'number'.

//Union Types:
//------------
//Declaring a variable that can hold 2 or diff types
let multiType: number | boolean
multiType = 20
multiType = true

//we can also think of doing above style as declaring with 'any' type, 
let anyType: any;
anyType = 10
anyType = true
anyType = 'Vishwas'

//But advantages of using multiType over anyType is :
// 1) IntelliSense support (just use dot operator and valid methods gets suggested)
// 2) bounded to only types with which its declared


//---------------------------------------------------------------------------------------------------

// functions in TypeScript:
// ========================

// functions in TypeScript can have their parameter types defined, while declaring it.
// functions can also have optional parameter (using ?) and default parameter.
// But optional parameter should always come after required parameter.

// A normal JS function
//---------------------

function add (num1, num2) {

    return num1 + num2;
}

const res = add(10, 20)
console.log('JS function result: ', res)

// A TypeScript function (with parameters and return types mentioned) 
//--------------------------------------------------------------------

function sum(num1: number, num2: number): number {

    return num1 + num2;
}

const result = sum(55, 45)
console.log('TS function result: ', result)

// A TS function with optional and default parameters
//----------------------------------------------------

function mul(num1: number = 6, num2?: number) {

    return num1 * num2;
}

// const res2 = mul(6,7) // normal function call 
const res2 = mul() //NaN
console.log('Optional and default parameters: ', res2)


// -------------------------------------------------------------------------------------------------

// objects can also be declared with types mentioned in TS.
// But if there are so many properties in an Object, specifying it in as a function parameter becomes difficult, hence Interface concept was introduced.

// Without Interface
//-------------------

const personObj = {

    firstName: 'Bruce',
    lastName: 'Wayne'
}

function showName(person: { firstName: string, lastName: string }) {

    console.log(`${person.firstName} ${person.lastName}`)
}

showName(personObj)

// Imagine object having 10 or 12 properties and 10 functions are taking it as their parameter, then code will become too difficult to read and maintain, hence using Interface.

// With Interface
//---------------

interface personInterface {

    firstName: string
    lastName: string
    // lastName?: 'Rogers'
}

const person = {

    firstName: 'Steve',
    lastName: 'Rogers'
}

function display(person: personInterface) {

    console.log(`${person.firstName} ${person.lastName}`)
}

display(person)

//------------------------------------------------------------------------------------------------------

// class in TypeScript
//====================

class Employee {

    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`)
    }
}

// creating instance of Employee class
let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

// creating a child class and using Inheritance concept from TS
// -------------------------------------------------------------

class Manager extends Employee {

    constructor(ManagerName: string) {
        super(ManagerName)
    }

    delegateWorks() {
        console.log(`Manager ${this.employeeName} delegating works `)
    }
}

let manager = new Manager('Diana');
console.log(manager.employeeName)
manager.greet()
manager.delegateWorks()
