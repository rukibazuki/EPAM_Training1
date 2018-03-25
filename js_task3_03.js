
var obj={} ;
console.log(obj);
obj.a=100;
obj.b="logo";
console.log(obj);

function myKey(myObj,myStr){
    for (var key in myObj){
        if ( key === myStr) {
            return(true)
        } else {}
        } return(false)
        }
console.log(myKey(obj,'c'));
console.log(myKey(obj,'a'));
console.log(myKey(obj,'b'));

