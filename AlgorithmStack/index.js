const stackMethod = (n)=>{
    let stack =[]
    let value = n.toLowerCase()
    let reView = ""
    
    for(let i=0; i < value.length; i++){
        stack.push(value[i])
    } 
    
    console.log(stack)
    
    for(let n=0; n<value.length; n++){
      reView +=  stack.pop()
    }
    console.log(reView)
}

// stackMethod('refer')

class Stack{
    constructor(){
        this.storage=[]
        this.count=0
    }

    add(value){
        this.storage[this.count]=value;
        this.count++
    }

    print(){
        return this.storage
     }
     log(){
         let data =this.storage
         let loggie =[]

         for(let k in data){
             loggie.push(data)
         }
         return loggie
     }

     //this shows the size of our stack
     size(){
         return this.count
     }

     //peak method shows the most recent items that entereed the stack
     peek(){
         return this.storage[this.count -1]
     }

     //this is used to remove or delete from the list
     remove(){
         if(this.count===0){
             return null
         }
         this.count--

         return this.storage[this.count]
     }

}


const stack = new Stack()

stack.add('Cynthia')
stack.add('Blessing')
stack.add('Clinton')
stack.add('Emmanuel')
stack.add('Precious')
stack.add('Joseph')
stack.add('Micheal')
stack.add('Victor')
stack.add('Luciana')
stack.add('Dickson')
stack.add('AjalaJaliongo')
stack.add('Engr Toheeb')
stack.add('SomeoneShaaaa')
stack.remove()
stack.remove()
stack.remove()


// console.log(stack.print());
// console.log(stack.log())
// console.log(stack.size())
console.log(stack.peek())



