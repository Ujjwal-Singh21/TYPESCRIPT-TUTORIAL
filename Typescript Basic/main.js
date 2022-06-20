"use strict";
// -> TypeScript is an open source programming language from microsoft.
// -> It is Typed Superset of JavaScript.
// -> It compiles down to plain JavaScript.
// -> Optional static typing and type Inference
// -> IDE support, Rapid growth and use. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
//variables declarations
//-----------------------
var i = 10;
// let i = 11 // -> Cannot redeclare block-scoped variable 'i'.
i = 20;
console.log(i);
// const title; // -> 'const' declarations must be initialized.
var title = 'Codevolution';
console.log('Title: ', title);
//variables types (string, boolean, number, any, unknown)
//---------------------------------------------------------
var value = 20;
var name = 'Vishwas';
var isBeginner = true;
console.log(value, name, isBeginner);
var sentence = "My name is ".concat(name, "\nand I am a beginner in TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
//this both declarations are of no use and hence we can use null and undefined types as
//subtypes for either string/number/boolean
var isHoliday = null;
var myName = undefined;
// 2 ways of Array declarations
//------------------------------
var list1 = [1, 2, 3, 4, 5];
var list2 = [10, 20, 30];
//tuple (fixed as per declaration & can store two diff types of values)
//----------------------------------------------------------------------
var person1 = ['Steve', 55]; // -> order is very important
console.log(person1);
//enum
//-----
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {})); //starts with 0
var c = Colors.Blue; //2
console.log('Colors: ', c);
var days;
(function (days) {
    days[days["Monday"] = 5] = "Monday";
    days[days["Tuesday"] = 6] = "Tuesday";
    days[days["Wednesday"] = 7] = "Wednesday";
})(days || (days = {})); //now starts with 5
var d = days.Tuesday; //6
console.log('Days: ', d);
//any type
//---------
var variable = 10;
variable = 'Steve';
variable = true;
console.log(variable); //true
//issues with any type 
//(to solve these issues 'unknown' type was introduced in TypeScript v3)
//------------------------------------------------------------------------
// console.log(variable.name)
// variable()
// variable.toUpperCase()
//unknown type
//-------------
var myVariable = 10;
// (myVariable as string).toUpperCase() // -> will throw an error, hence doing type assertion (type cast)
//Type Inference:
//----------------
// When we just declare a variable and assigns some value to it, based on the type of value we have assigned, TypeScript will simply internally make the variable of that type.
// But this happens only when variable is declared and assigned with some value.
var a = 10; // -> Internally makes type as number -> let a: number
// a = 'Ujjwal' // -> error: Type 'string' is not assignable to type 'number'.
//Union Types:
//------------
//Declaring a variable that can hold 2 or diff types
var multiType;
multiType = 20;
multiType = true;
//we can also think of doing above style as declaring with 'any' type, 
var anyType;
anyType = 10;
anyType = true;
anyType = 'Vishwas';
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
function add(num1, num2) {
    return num1 + num2;
}
var res = add(10, 20);
console.log('JS function result: ', res);
// A TypeScript function (with parameters and return types mentioned) 
//--------------------------------------------------------------------
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(55, 45);
console.log('TS function result: ', result);
// A TS function with optional and default parameters
//----------------------------------------------------
function mul(num1, num2) {
    if (num1 === void 0) { num1 = 6; }
    return num1 * num2;
}
// const res2 = mul(6,7) // normal function call 
var res2 = mul(); //NaN
console.log('Optional and default parameters: ', res2);
// -------------------------------------------------------------------------------------------------
// objects can also be declared with types mentioned in TS.
// But if there are so many properties in an Object, specifying it in as a function parameter becomes difficult, hence Interface concept was introduced.
// Without Interface
//-------------------
var personObj = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
function showName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
showName(personObj);
var person = {
    firstName: 'Steve',
    lastName: 'Rogers'
};
function display(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
display(person);
//------------------------------------------------------------------------------------------------------
// class in TypeScript
//====================
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
// creating instance of Employee class
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
// creating a child class and using Inheritance concept from TS
// -------------------------------------------------------------
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(ManagerName) {
        return _super.call(this, ManagerName) || this;
    }
    Manager.prototype.delegateWorks = function () {
        console.log("Manager ".concat(this.employeeName, " delegating works "));
    };
    return Manager;
}(Employee));
var manager = new Manager('Diana');
console.log(manager.employeeName);
manager.greet();
manager.delegateWorks();
