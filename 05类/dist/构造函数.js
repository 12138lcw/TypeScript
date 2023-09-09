"use strict";
class dog {
    name;
    age;
    // 相当于new一个的时候调用这个函数
    constructor(name, age) {
        // 消除红色得在外面声明实例类型
        this.name = name;
        this.age = age;
    }
}
const a = new dog('鸡', 3);
