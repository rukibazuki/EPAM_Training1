function myNum(n) {
  if (typeof(n) === "number") {
    console.log('это число');
      } else { 
         if (typeof(n) === "string"){
        console.log("это строка");
      } else {
      console.log("ошибка");
    }
    } 
  }
  myNum(4);
    
    