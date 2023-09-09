"use strict";
(function () {
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const lcw = new Person('梁朝伟', 18);
    console.log(lcw);
    // lcw.name = 'w'
    // 泛型
    function x(a) {
        return a;
    }
    x(1); // 不指定类型时TS会自动判断该数值是什么类型
    x(321); // 指定泛型
    // 可传多个泛型
    function x2(a, b) {
        return b;
    }
    function x3(a) {
        return a;
    }
    // 传过去的必须带有length属性
    x3({ length: 2 });
    x3('123');
    x3([1]);
    //     也可以在类中使用
})();
