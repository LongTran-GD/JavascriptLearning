// equally
    var greeting = "hey hi";
    var times = 4;

    if (times == 3) {
        var greeting = "say Hello instead"; //declare and update value
    }

    console.log(greeting); //"say Hello instead"
// equally    
    var greeting = "hey hi";
    var times = 4;

    if (times > 3) {
        greeting = "say Hello instead";  //update value
    }

    console.log(greeting); //"say Hello instead"
//equally
    var greeting = "hey hi";
    var times = 4;

    if (times > 3) {
        greeting = "say Hello instead"; //update value
    }

    console.log(greeting); //"say Hello instead"
//inequally below

//2
//equally
   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead"; //declare new value
        let greeting = "say Hello instead"; // declare a value, not update
        console.log(hello); // "say Hello instead"
    }
   //console.log(hello); // hello is not defined, out of scope _error
   console.log(greeting);// say hi
//

   const greeting = "say Hi";
   let times = 4;

   if (times == 4) {
        const hello = "say Hello instead"; //declare new value
        const greeting = "say Hello instead"; // declare a value, not update
        console.log(hello); // "say Hello instead"
    }
   //console.log(hello); // hello is not defined, out of scope _error
   console.log(greeting);// say hi

//3
//inequally

   const greeting = "say Hi";
   let times = 4;

   if (times == 3) {
        const hello = "say Hello instead"; //declare new value
        greeting = "say Hello instead"; // can not update const is constant
        console.log(hello); // "say Hello instead"
    }
   //console.log(hello); // hello is not defined, out of scope _error
   console.log(greeting);// say hi
  
