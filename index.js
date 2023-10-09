
function receivesAFunction(callback){
    callback();
}
function expectedToCall(callback){
    requireChai();
    callback();
}

function returnsANamedFunction(){
    return (function noName(){return "I am fine."});
    }

function returnsAnAnonymousFunction(){
    return function (){
        
    }
}