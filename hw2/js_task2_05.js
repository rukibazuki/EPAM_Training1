function maxVal(){
var i,maxValue, myArray=[5,2,1000,201]; 
maxValue=myArray[0];
for(i=0; i<myArray.length;i++){
    if (myArray[i]<myArray[i+1]) {
        maxValue=myArray[i+1];  
    }
}
console.log(maxValue);
}
maxVal();

