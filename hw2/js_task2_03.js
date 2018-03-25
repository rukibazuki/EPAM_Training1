
function mySet(){
    var i,zero=0,even=0,odd=0, myArray=[5,2,0,1000,201,3,1,6,0]; 
    for(i=0; i<myArray.length;i++) {
        if (myArray[i] != 0 ){
            if  (myArray[i]% 2 === 1 ) {
                odd=odd+1;
            } else { 
                even=even+1;
                     }    
       }
        else { zero=zero+1;
    }
} 
    console.log("четных:",even);
    console.log("нечетных:",odd);
    if (zero>0){
        console.log('нуль:',zero);
    }
    
    }
    mySet();
    





      