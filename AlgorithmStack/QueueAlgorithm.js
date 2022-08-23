//Queue Algorithm: First In First Out
const Queue = (n) =>{
    let name = []
let newName = n.toUpperCase()
let checkName = ''
for(let i = 0; i< newName.length; i++){
    name.push(newName[i])
}
for(let i = 0; i< newName.length; i++){
//    checkName += name.pop(i)
checkName += name.shift(i)
}
console.log(name)
console.log(checkName)
}

// Queue('Cynthia')

class Queues{
    constructor(){
        this.storage={}
        this.count=0
    }
    add(value){
        this.storage=[this.count]=value;
        this.count++
    }
}

const newQueue = Queues

Queues.add('Cynthia')

console.log(newQueue)