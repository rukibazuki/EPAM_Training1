
var obj={} ;
obj.a=100;
obj.b="logo";
obj.c='icon'; 
function copy(myObj){
var clone =myObj;
for (var key in myObj) {
  clone[key] = myObj[key];
}
return(clone);
}
console.log(copy(obj)); 