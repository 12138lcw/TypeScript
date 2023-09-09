(function () {
   class Person {
       private name:string;
       protected age:number;
       constructor(name:string,age:number) {
           this.name = name;
           this.age = age
       }
   }
   class person {
       constructor(public name:string, public age:number) {
       }
   }
   const lcw = new Person('梁朝伟',18)
    console.log(lcw)
    // lcw.name = 'w'
    // 泛型
    function x<x>(a:x):x{
       return a
    }
    x(1)  // 不指定类型时TS会自动判断该数值是什么类型
    x<number>(321)  // 指定泛型
    // 可传多个泛型
    function x2<x,y>(a:x,b:y):y {
       return b
    }
//     指定接口作为泛型 传过去的值有xxx属性
    interface Int {
       length:number
    }
    function x3<x extends Int>(a:x):x {
        return a
    }
    // 传过去的必须带有length属性
    x3({length:2})
    x3('123')
    x3([1])
//     也可以在类中使用
})()