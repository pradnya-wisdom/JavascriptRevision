
// Datatypes
// integer, float, string, boolean
var a=18
var percentage=68.32
var name="Karthik"
var iscoder=true
//array

var marks=[16,20,18,17,19,"Karthik",false,89.23]


//Arithmetic Operators +,-,*,/,%

// relational operator <,>, <=,>= ,===,!==
x=15
y=2

z=x+y

p=x/y; // 15/2= 7.5
q=x%y //15%2= 1



function setup() {
	createCanvas(800, 700);
  console.log("value of a=",a)
  console.log("percentage=",percentage)
  console.log("Name=",name)
  console.log("iscoder=",iscoder)


  //arithmetic operations
  
  console.log("Addition=",z)
  console.log("Quotient",p)
  console.log("Remainder",q)

//Conditional statement  if-else
//to check whether values are identical or not
  if(x===y)
{
  console.log("Identical")

}
else{
  console.log("different")
}

// Check whether given number is even or odd

   if(x%2===0)
   {
     console.log("Even")

   }
   else{
     console.log("Odd")
   }


//find greater among two numbers
if(x>y)
{
  console.log(" x is greatest")
}
else if (y>x)
{
  console.log(" y is greatest")
}
else{
  console.log("identical")
}


//find greater among three numbers (x,y,a)
//logical operator  && ||
if(x>y  && x>a)
{
  console.log(" x is greatest")
}
else if (y>x && y>a)
{
  console.log(" y is greatest")
}
else{
  console.log(" a is greatest")
}
   
//array: collection of values

console.log(marks[2])
console.log(marks)

// for statement

//syntax
//for(initialize;condition;increment/decrement)

//Print 10 to 1

for(var i=10;i>=1;i--)
{
  console.log(i)
}


//print even numbers from 1 to 50
start_number=17
end_number=50
for(var i=start_number;i<=end_number;i++)
{
  if(i%2!==0)
  {
  console.log(i)
  }
}
}


function draw() {
 
  
  drawSprites();
 
}


