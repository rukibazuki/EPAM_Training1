
var obj={} ;
obj.a=100;
obj.b="logo";
function myKey(myObj,myStr){
    for (var key in myObj){
        if ( key === myStr) {
            return(true)
        } else {}
        }  {
            function upObj(a, b) {
                this.a = a;
                this.b = b;
              }
            var newObj = new upObj(obj.a, obj.b);
            newObj.c='icon'; 
      return(newObj)
     }
 }
console.log(myKey(obj,'c'));
console.log(myKey(obj,'b'));





