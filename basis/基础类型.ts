// TypeScript 基础类型

// boolean
let isDone: boolean = true

// 注意，使用构造函数 Boolean 创造的对象不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1)

// index.ts(1,5): error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
// 后面约定，注释中标出了编译报错的代码片段，表示编译未通过

// number
let decLiteral: number = 6
let hexLiteral: number = 0xf00d

// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010

// ES6 中的八进制表示法
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

// string
let myName: string = 'Tom'
let myAge: number = 25

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`
