class fa {
    constructor(name) {
        this.name = name
    }
    set name(val){
        console.log(val)
    }
    say(){
        console.log('hello')
    }
    static tosay(){
        console.log('tosay')
    }
}

console.log(fa)
const fa1 = new fa()
console.log(fa1)
fa1.name = 'lcw'