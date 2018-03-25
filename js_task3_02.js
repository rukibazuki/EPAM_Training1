
var obj={} ;
console.log(obj);
obj.a=100;
obj.b="logo";
console.log(obj);

function myKey(myObj){
    for (var key in myObj){
     console.log(key)
} 
}
myKey(obj);