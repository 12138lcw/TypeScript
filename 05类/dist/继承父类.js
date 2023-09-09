"use strict";
class father {
    name;
    age;
    // 相当于new一个的时候调用这个函数
    constructor(name, age) {
        // 消除红色得在外面声明实例类型
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('www');
    }
}
class son extends father {
    // constructor(name,age) {
    //     super(name,age);
    // }
    say() {
        super.say();
    }
}
