class stack {
    constructor(){
        this.storage={}
        this.count=0
    }
    push(value){
        this.storage[this.count]=value,
        this.count++
    }
    show(){
        return this.storage
    }
}

const newStack = new stack();
console.log(newStack.show())