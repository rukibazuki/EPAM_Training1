function myBool(){
    var i, myArray=[0,0,5,0,1,99]; 
    for(i=1; i<myArray.length;i++) {
        if (myArray[0] != myArray[i]){
            console.log('false');
            break;
        }
        else {if (i===myArray.length-1) 
            console.log('true');
        }
    }
}
    myBool();
    