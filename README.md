# JavaScript-Assignments
SECTION-1:


PROBLEM-1

The output of the console.log statements is:
console.log(counterA()); here we have initial count as 0 ,so this gives output as 1.
console.log(counterA()); here we have initial count as 1 i.e from above statement, so this gives output as 2.
console.log(counterB()); here we are creating a new object, so when we call this function it re-initializes the count to zero and gives output as 1 when we increment it.

-->Will counterA and counterB maintain independent counts?
Yes, they do maintain independent counts because they are different objects.


PROBLEM-2

--> What will be the output of this code?
    The output of this code will be as follows:
    Hello, undefined //after 1 sec
    Hello, undefined //after 2 sec
    Hello, undefined //after 3 sec

--> Will it greet the names as expected with the increasing delays?
    No


SECTION-2:


PART-1

-->What happens when you try to access a variable before it&#39;s declared?
   As we are trying to access a variable before declaration it gives reference error. 

-->How does var behave inside a function?
   var is function-scoped,so we can access the variable anywhere in the function.

-->What's the scope of mysteryVariable?
   mysteryVariable = 10;
   here it has global scope.
   var mysteryVariable = 20;
   here it has functional scope .
   Even after running the function the global variable remians same.

-->Task-1:
    The ouput will be:
    undefined
    10
    Inside revealMystery (after declaration): 20
    After revealMystery: 10
-->Task-2:
   Hoisting,simply means moving the scope of the variables to the top.
   var-here it hoists the variable and initializes with undefined and allows to access variable before declaration without giving an error.
   let,const-here it hoists the variable but it will not initailize,when we try to access before declaration it gives reference error.


PART-2:

-->What will this refer to inside the setTimeout callback function? Why?
   Here this refers to window name which is an empty string or it will give global objector undefined.

Task-1:
here it calls the setTimeout function but not object as it refers to global object.

Task-2:
here storing this in a variable refers to the current object.

Task-3:
Arrow functions refers to it's own object i.e where it is defined.

PART-3:

-->How does the inner increment and decrement functions relate to the count
   variable in setupCounter? Will counterOne and counterTwo have independent counts?
   CounterOne and counterTwo share independent count variables, since both calls to setupCounter establish their own closure, with its own scope.

Task-1:
A closure is a function that "remembers" the variables from the scope in which it was created—even after that scope has finished executing.
-Count is defined in setUpcounter and increment,decreadrement form closures and they can able to access the count variable even after the function returns.

PART-4:

Task-1:
-If fewer arguments are passed than the number of declared parameters, the remaining parameters get the value undefined.
-If more arguments are passed than the number of declared parameters, the extra arguments are simply ignored, unless handled via the arguments object or the rest parameter.

Task-2:
-The rest parameter allows a function to accept an indefinite number of arguments as an array.
Syntax:
function example(...args) {
  console.log(args); // args is an array
}


