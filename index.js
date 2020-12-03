class _Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}
// create stack indicating that top is empty 
class starTrek {
    constructor(){
        this.top = null 
    }
    push(data){
        //if stack is empty then this node will be new top of stack
        if(this.top === null){
            this.top = new _Node(data,null)
            return this.top
        }
    }
}
push("Kirk","Scotty","Spock")
