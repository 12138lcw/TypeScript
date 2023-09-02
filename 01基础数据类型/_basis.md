### 赋数据类型给变量

let a : 数据类型 

a 只能给指定的数据类型

#### 如果变量的声明和赋值是同时进行，TS可以自动对变量进行类型检测

参数和返回值都可以指定

function xxx(a:number) : **number**(指定返回值是数字类型) {}

### 数据类型

类型断言: e as xxx || <xxx> a e 告诉解释器e是xxx类型

1. number
2. string
3. Boolean
4. 字面量  限制值只能是赋值的10 let a : 10|12 可以使用|来连接多个类型(联合类型)
5. any 任意数据类型 少用
6. unknown  unknown和any的区别就是当赋值给另一个变量时unknown会报错 类型安全 
7. void 用来表示为空
8. never 表示永远不会有返回结果
9. object 表示一个js对象  a:object  a:{name:string,age?:xxx,[xxx:属性名类型]:any} 表示a对象必须有name属性并值类型是string；指定结构多一个属性不行少一个也不行,属性名加？表示这个属性有可以没有也可以,只指定一个属性类型的话则加上[] 为其他属性名声明；函数也可以用这种方法来限制函数参数结构 a:(xxx:type)=>type 返回的数据类型
10. array 数组  a:string[] 表示只能存字符串的数组  a:Array<string>
11. tuple 元组是固定长度的数组 a:[string,string] 
12. enum 枚举  enum xxx { n1=1,n2=2}  let a:xxx   a=xxx.a1 结果a===1
123
### 类型别名

type xxx = xxx 

k:xxx
