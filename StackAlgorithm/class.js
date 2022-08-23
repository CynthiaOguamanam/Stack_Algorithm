//LINK LIST 
class LinkedList{
    constructor(){
      this.head = null;
      this.tail = null;  
    }

    append(value){
        let node ={value: value, next: null};
        if(this.tail){
            this.tail.next = node;
        }
        this.tail = node;

        if (!this.head){
            this.head = node;
        }
    }

        prepend(value){
            let node = {
                value: value, next: this.head
            }
            if (this.head){
                this.head = node;
            }
        }
            remove(value){
                if(!this.head){
                    return;
                }

                while(this.head && this.head.value === value){
                    this.head.next = this.head
                }
            
                let node = this.head

                while(node.next){
                    if(node.next.value === value){
                        node.next = node.next.next
                    } else{
                        node = node.next;
                    }
                }
            
            }


        print(){
            let element = []
            let node = this.tail

            while(node){
                element.push(node)
                node = node.next
            
        }
    }
}

const build = new LinkedList();

build.append("hello");
build.append("from");
build.append("codelab");
build.append("wilmer");
build.append("05");
build.prepend("Gideon")
build.remove("Gideon")

console.log(build.print());