import {createObject,createArray} from 'createObject'
import Stack from './stack'


const stackHandler = new Stack()


stackHandler.createStack(6)

stackHandler.insert(function(name,age){
    return {
        name,age
    }
})

console.log(stackHandler.getStack())


stackHandler.drop()


console.log(stackHandler.getStack())

stackHandler.insert(function(name,age){
    return {
        name,age
    }
})

console.log(stackHandler.getStack())


// console.log(createObject('Bruno',19))

// console.log(createArray(0,1,2,3,4,5,6,7,8,9))







