class stack {
    constructor(){
        this.storage = {}
        this.count = 0
    }
    push(value){
        this.storage[this.count] = value,
        this.count++;
    }

   show(){
       return this.storage;
   }


   

    // size(){

    // }

   log(){
       let n =this.storage
       let w =[]
       for (let k in n){
           w.push(n[k])
       }
       return w;
   }
}

const newStack = new stack();  

newStack.push(20);
newStack.push(50);
console.log(newStack.show());
console.log(newStack.log());
// console.log(newStack.size());











//const x; undefined
//const y = null