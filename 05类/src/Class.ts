// 1. 使用class定义
class User{
//     实例属性||方法定义
    name:string = '用户1'
    age:number = 20
    say(){
        console.log('早上好啊')
    }
//     静态属性（类属性）||方法
    static u_name:string = '会员'
    static push(){
        console.log('会员1号')
    }
    // readonly 表示只可读
    readonly id:number = 123456
}

console.log(User)
const user = new User()
console.log(user)