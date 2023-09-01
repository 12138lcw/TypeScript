let a:number;
a = 1
let b = '123'
function xxx (a=1,b=2) {
    return a + b
}

console.log(xxx(3,5))
// 数据类型
//1，number
//2.string
//3.Boolean
//4.字面量 可以用|来连接多个类型称为联合类型
let c:10|20
c = 20
c= 10
//5.any 任意数据类型
let d:any
d = 1
d = '1'
//6.unknown 也是表示任意数据类型
let e:unknown
e = 1
e = '2'
let f:number
console.log(typeof f)
f = d   // any赋值给其他变量时也是任意数据类型这样赋值就会出错而unknown则会报错
// f = e
console.log(f)
// 7. void 表示为空值
let g:void
g = null
g = undefined
// 8. never 表示永远不会返回数据类型
let h:never
// h = 1
// h = null
//9. Object
// let  j:object;
// j = {}
// 表示name必须有 参数后面跟问号表示这个可以有也可以没有，[]表示其他参数的格式
let j:{name:number,age?:number,[xxx:string]:unknown}
j = {
    age:1,
    name:12
}
// 函数也可以写这种类型
let k:(n1:string,n2:string)=>string
k=function (n1,n2,){
    return 'xxxx'
}
//10.array
// let a:string[] 声明一个只能存放字符串的数组
// let a : Array<xxx>
//11.tuple 固定长度的数组
let l:[number,number]
l = [1,2]
// 12.enum 枚举
enum age {
    n1,
    n2,
    n3
}
let y:{
    name:string,
    age:age
}
y = {
    name:'lcw',
    age:age.n1
}
console.log(y)
// 类型别名 给类型起别名
type n = string
let p:n