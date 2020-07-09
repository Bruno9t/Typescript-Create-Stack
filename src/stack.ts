type functionOfStack = (...params:any[]) => any

// interface Array<T>{
//     push(items:T | null):T | null;
// }

class Stack {
    private stackIndexTop:number
    private stackSize:number | undefined;
    private stack!:Array<functionOfStack> | undefined[];

    constructor(){
        this.stackIndexTop = -1
        this.stackSize = 0
        this.stack;
    }


    public createStack(sizeOfStack?:number){

        if(sizeOfStack === undefined){
            this.stackSize = undefined

            this.stack = new Array()
        }

        this.stackSize = sizeOfStack
        this.stack = new Array(sizeOfStack)

        return this.stack

    }

    public getStack(){
        return this.stack
    }

    public insert(stackElement:functionOfStack){

        this.stackIndexTop++

        if(this.stackSize === undefined){

            this.getStack()[this.stackIndexTop] = stackElement

        }else if((this.stackSize)===this.stackIndexTop){

            throw new Error(`Max stack size:${this.stackSize}`)

        }else{

            this.getStack()[this.stackIndexTop] = stackElement

        }
    }

    public drop(){
        if(this.stackIndexTop===-1) {

            return "Stack is empty!"
      
          }
          
        
            this.getStack()[this.stackIndexTop]=undefined;

            this.stackIndexTop-=1
      
    }

    public stackHeigth(){

        if(this.stackIndexTop==-1){
            throw Error('No elements in stack!')
        }

        return this.stackIndexTop+1

    }
}

export default Stack

