function receivesAFunction(spy){
console.log(spy());
};
receivesAFunction(function(){return "this is a function"});

function returnsANamedFunction(){
  return function namedFunction(){}
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
  return function(){}
};
returnsAnAnonymousFunction;
