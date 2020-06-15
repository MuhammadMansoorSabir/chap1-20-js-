// var arr=["mansoor","wajahat","baasir"];
// console.log(arr[0]);

// var arr1= new Array("tayyab","umair","zain");
// console.log(arr1);

// var b=prompt("enter your age ","for ex");
// if(b>=18){
//     alert("you are eligible");
// }
// else{
//     alert("side mein ho");
// }

                                                // Muhammad Mansoor Assignment chap 1-20.//

alert("Hello Visitor")

alert("Error Please Enter the valid password")

alert("Welcome to JS Land.." + "\n" + "Happy Coding!")


alert("Welcome to JS Land.." + "\n" + "prevent this page for creating the additional dailogues")

console.log("Hello...i can run JS through my web browser console")

//CHAP-2//

var username= "Jhon Doe";
alert(username)

var myName= "Muhammad Mansoor";
alert(myName)

var message="Hello World";
alert(message)

var name="John Doe";
var age = "15years";
var Qualification="Certified Mobile application developement"
alert(name)
alert(age)
alert(Qualification)


var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(pizza)

var email = "mansoorsabir@gmail.com"

alert("My email address is"+ " " + email)

var book = "I am trying to learn book A smarter way to learn java script";
alert(book)

var greeting=" Yah! I can write HTML content through java script"
document.write(greeting)

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

//CHAP-03

var age = "20"
alert("I am" + " " + age + " " + "year old")

var visits = "15"
alert("You have visited" + " " + visits + " " + "times this page")

birthYear = "1999"
document.write("My birth year is" + " " + birthYear + "<br>" + "Datatype of my declared variable is number"+ "<br>")


var visitor = "Jhon Doe"
var product = "Shoes"
var Quantity = "3 pieces"
document.write(visitor + " " +  "want to order" + " " + Quantity + " " + product + " " + "from xyz shopping store")


//CHAP04


var statement1 = "Variable name can only contain numbers,$ and _.For Example:$my_1stVariable";
document.write(statement1 + "<br>")
var statement2 = "Variable must begin with a letter,$or_.Forexample:$name,_name or name"
document.write(statement2 +  "<br>")

var statement3 = "Variable names are case sensitive"
document.write(statement3 + "<br>")
var statement4 = "Variable names should not be a JS keywords"
document.write(statement4)


//CHAP05

document.write("Part1" + "<br>")
const number1 = 10;
const number2 = 5;
var sumNumber = number1 + number2;
var diffNumber = number1 - number2;
var productNumber = number1 * number2;
var divNumber = number1 / number2;
var modNumber = number1 % number2;
document.write("The sum of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + sumNumber + "<br>")
document.write("The difference between" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + diffNumber + "<br>")
document.write("The product of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + productNumber + "<br>")
document.write("The division of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + divNumber + "<br>")
document.write("The remainder of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + modNumber + "<br>"+ "<br>")
document.write("Part2"+ "<br>")

var number = "??"
document.write("Value after variable declaration is:" + " " + number +"<br>")
var number = "5"
document.write("Initial Value is:" + " " + number +"<br>")
var increase = ++number
document.write("The Value after increment is:" + " " + increase +"<br>")
var add = number + 5
document.write("The value after addition is:" + " " + add +"<br>")
var decrease = --add
document.write("The value after decrease is:" + " " + decrease +"<br>")
var remainder = decrease % 3
document.write("The remainder is:" + " " + remainder + "<br>"+ "<br>" )
document.write("Part3 "+ "<br>")
var ticket = 300;
var costTickets = ticket*5;
document.write("The cost to buy 5 tickets for a movie is:" + " " +costTickets +"<br>"+ "<br>" )
document.write("Part4 "+ "<br>")

for(var i = 1; i<=10;i++){
    document.write("4"+" "+"x"+" "+i+"="+" "+4*i+"<br>" + "<br>")
}
document.write("Part5 "+ "<br>")

var tempCelcius = 50;
var convTempF= (tempCelcius*9/5)+32 
document.write("The Converted temperature in Fahrenheit is:" + " " + convTempF +"NNoF"+ "<br>")
var tempFahren = 100;
var convTempC= (tempFahren-32)*5/9 
document.write("The Converted temperature in Celcius is:" + " " + convTempC +"NNoC"+ "<br>"+ "<br>")

document.write("Part6 "+ "<br>")
var item1 = 650;
var item2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shipping = 100;
var totalCost = (item1*qtyItem1 + item2 * qtyItem2+shipping)
document.write("The price of item1 is:" + " " + item1 + "<br>" )
document.write("The quantity of item1 is:" + " " + qtyItem1 + "<br>" )
document.write("The price of item2 is:" + " " + item2 + "<br>" )
document.write("The quantity of item2 is:" + " " + qtyItem2 + "<br>" )
document.write("TotalCost:"+ " " + totalCost + "<br>"+ "<br>")

document.write("Part7 "+ "<br>")

var tMarks = 600;
var oMarks = 450;
var per = (450*100)/600
document.write("The total marks are:"+" "+ tMarks+ "<br>")
document.write("The marks obtained by a student is:" + " " + oMarks+ "<br>")
document.write("Percentage:" + " " + per+ "%" + "<br>"+ "<br>")

document.write("Part8 "+ "<br>")
var convertCurrency = (10 * 104.80 + 25 * 28)
document.write("Total Currency in PKR:"+ " " + convertCurrency + "<br>" + "<br>")

document.write("Part9 "+ "<br>")

var num = 8;
var calculation = (num + 5)*10/2;
document.write("Calculation:" + " " + calculation+ "<br>"+ "<br>")


document.write("Part10 "+ "<br>")
var currentYear = 2020;
var birthYear = 1999;
var age = currentYear-birthYear
document.write("Current Year:" + " " +currentYear+ "<br>")
document.write("BirthYear:" + " " + birthYear+ "<br>")
document.write("Your age is:" + " " + age+ "<br>"+ "<br>")


document.write("Part11 "+ "<br>")

var radius = 10;
document.write("The radius is:" + " " + radius + "cm" + "<br>")
var circumference = 2 * 3.14 * radius
document.write("The circumference is:" + " " + circumference + "cm"+ "<br>")
var area = 3.14 * radius**2;
document.write("The area of a circle is:" + " " + area+ "<br>"+ "<br>")

document.write("Part11 "+ "<br>")
var snack = "Chocolate Chip";
document.write("Favourite Snack:" + " " +snack+ "<br>")
var currentAge = 21;
document.write("Current Age:" + " " + currentAge+ "<br>")
var maxAge = 70;
document.write("Max Age:" + " " + maxAge+ "<br>")
var amountperDay = 5;
document.write("AmountPerDay:" + " " + amountperDay+ "<br>")
var totalConsume = (maxAge-currentAge)*5
document.write("TotalConsume:" + " " + totalConsume)

//CHAP 6-9

document.write("Part1"+ "<br>"+ "<br>")
var a = 10;
var b = ++a;
document.write("The value of ++a is:" + " " + b + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>")
var c = b++;
document.write("The value of a++ is:" + " " + c + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>")
var d = --b;
document.write("The value of --a is:" + " " + d + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>")
var e = b--;
document.write("The value of a-- is:" + " " + e + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>"+ "<br>")

document.write("Part2"+ "<br>"+ "<br>")
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("The --a becomes 1" + "<br>")
document.write("The --b becomes 0" + "<br>")
document.write("The ++b becomes 1" + "<br>")
document.write("The b++ becomes 1" + "<br>")
document.write("The result becomes" + " " + result + "<br>"+ "<br>")

document.write("Part3"+ "<br>"+ "<br>")
var name = prompt("Enter your name")
alert("Hello" + " " + name + "!")

document.write("Part4"+ "<br>"+ "<br>")

var num1 = prompt("Enter your number")
for (var i = 1; i<=10;i++){
    if (num1 === 5){
        document.write("5" + " " + "x"+ " " +i + "=" + 5*i + "<br>");
    }
    else{
        document.write(num1 + " " + "x"+ " "+i+" "+"="+num1*i + "<br>")
    }
}

document.write("Part5"+ "<br>"+ "<br>")
var inputSub1 = prompt("Enter your subject1");
var sub1 = inputSub1
var inputSub2 = prompt("Enter your subject2");
var sub2 = inputSub2
var inputSub3 = prompt("Enter your subject3");
var sub3 = inputSub3
var totalMarks = prompt("Enter the total marks:")
var tMarks = totalMarks
var obtainMarks1 = prompt("Enter the obtain marks of Sub1")
var oMarks1 = obtainMarks1
var obtainMarks2 = prompt("Enter the obtain marks of Sub2")
var oMarks2 = obtainMarks2
var obtainMarks3 = prompt("Enter the obtain marks of Sub3")
var oMarks3 = obtainMarks3
var Total = (totalMarks+totalMarks+totalMarks)
var totalSub = (oMarks1+oMarks2+oMarks3)
var perSub1 = (obtainMarks1*100)/totalMarks
var perSub2 = (obtainMarks2*100)/totalMarks
var perSub3 = (obtainMarks3*100)/totalMarks
document.write(sub1 + " " + totalMarks + " " + obtainMarks1 + " " + perSub1 + "%" + "<br>" + "<br>")
document.write(sub2 + " " + totalMarks + " " + obtainMarks2+ " " + perSub2 + "%" + "<br>"+ "<br>")
document.write(sub3 + " " + totalMarks + " " + obtainMarks3 + " " + perSub3 + "%" + "<br>")
document.write(Total + " " + totalSub)


//CHAP 9-11//
document.write("Part1" + "<br>" + "<br>")

var city = prompt("Enter the city name:")
if (city === "Karachi") {
    alert("Welcome to the city of lights!")
}
else {
    alert("This is also a beautiful city!")
}

document.write("Part2" + "<br>" + "<br>")

var gender = prompt("Enter your Gender:")

if (gender === "Male") {
    alert("Good Morning Sir!")
}
if (gender === "Female") {
    alert("Good Morning maam!")
}

document.write("Part3" + "<br>" + "<br>")

var trafficLight = prompt("Enter your traffic light!")

if (trafficLight === "Red") {
    alert("Must Stop!")
}

else if (trafficLight === "Yellow") {
    alert("Ready To move!")
}

else if (trafficLight === "Green") {
    alert("Move Now!")
}
document.write("Part4" + "<br>" + "<br>")

var fuelLitres = prompt("Enter Your Fuel in Litres:")
var minFuel = 0.25

if (fuelLitres < minFuel) {
    alert("Please refill the fuel in your car")
}
else {
    alert("You have enough fuel to drive your car")
}

document.write("Part5" + "<br>" + "<br>")
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False")
}
document.write("MarkSheet" + "<br>" + "<br>")

const mark1 = prompt("Enter the marks in subject 1")
const mark2 = prompt("Enter the marks in subject 2")
const mark3 = prompt("Enter the marks in subject 3")
const totalOMarks = +(mark1) +(+mark2) + (+mark3) 
alert("The Total Obtain Marks are:" + totalOMarks)
var total = 300
var percentage = (totalOMarks*100)/total
alert(percentage+" "+"%")
if (percentage > 80 || percentage  === 80){
    document.write("Grade" + "<br>" + "A-one" + "<br>" + "Remarks" + "<br>" + "Excellent")
}
else if (percentage > 70 || percentage ===70){
    document.write("Grade" + "<br>" + "A" + "<br>" + "Remarks" + "<br>" + "Good")

}
else if (percentage > 60 || percentage ===60){
    document.write("Grade" + "<br>" + "B" + "<br>" + "Remarks" + "<br>" + "You need Improvement")


}
else if (percentage < 60){
    document.write("Grade" + "<br>" + "Fail" + "<br>" + "Remarks" + "<br>" + "Sorry"+ "<br>" + "<br>" )
}



document.write("GuessGame" + "<br>" + "<br>")

var guess = 6;
var guessNumber = prompt("Enter your guess number:")

if(guess == guessNumber){
    alert("Bingo! you guess Correct answer")
}


else if (guessNumber == ++guess){
    alert("Close enough to correct answer")
}

else{
    alert("Please try again later ")
}

document.write("Part8" + "<br>" + "<br>")


var num = prompt("Enter the number")
if (num%3 == 0){
    alert("Yes your number is divisible by 3")
}
else{
    alert("This number is not divisible by 3")
}

document.write("Part9" + "<br>" + "<br>")

var checkNumber = prompt("Enter your number")

if (checkNumber%2 == 0){
    alert("Your number is even")
}

else if (checkNumber%2!= 0){
    alert("Your number is odd")
}
document.write("Part10" + "<br>" + "<br>")

var temp = prompt("enter your temperature")

if (+temp>40){
    alert("Its too hot outside!")
}

else if(+temp>30){
    alert("The weather today is normal")

}

else if(+temp>20){
    alert("Today weather is cool!")
}

else if (+temp >10){
    alert("OMG! The weather is so cold outside")
}

document.write("Part11" + "<br>" + "<br>")

var firstNumber = prompt("Enter the first number")
var operator = prompt("Enter your operator")
var secondNumber = prompt("Enter the second number")


if (operator ==="+"){
    calc1 = ((+firstNumber) +(+secondNumber))
    alert(calc1)
}
else if (operator ==="-"){
    calc2 = ((+firstNumber) -(+secondNumber))
    alert(calc2)
}
else if (operator ==="*"){
    calc3 = (firstNumber * secondNumber)
    alert(calc3)
}
else if (operator ==="/"){
    calc4 = (firstNumber / secondNumber)
    alert(calc4)
}

else if (operator ==="%"){
    calc5 = (firstNumber % secondNumber)
    alert(calc5)
}
//Chapter 12-13

//Part 2
var number1 = window.prompt("Please Enter first string");
var number2 = window.prompt("Please Enter second string");
var a=number1.length
var b=number2.length
if(a > b )
{

document.write("First string is greater");
}
else
{
if(a < b)
{

document.write("Second string is greater");

}

else
{
if(a = b)
{
document.write("Both strings are equal ");
}
}
}

//Question 3
var number=window.prompt("Please enter the number");
if( number > 0)
{

document.write("Number is positive");

}
else
{

if(number < 0)
{

document.write("Number is negative");

}
else
{

if(number == 0)
{
document.write("Number is zero");

}
}
}



//Part 4
var number=window.prompt("Please enter the number");
if( number > 0)
{

document.write("Number is positive");


}
else
{

if(number < 0)
{

document.write("Number is negative");


}
else
{

if(number == 0)
{
document.write("Number is zero");

}
}
}


//Part 5
var password=window.prompt("Please enter your password!");
var match=window.prompt("Please again enter your password!");
var a=password.length;
var b=match.length;
if(a == 0 )
{

document.write("Please enter your password!");

}
else
{

if(a ==b)
{

document.write("Correct! The password you entered matches the original password");

}
else

{
document.write("Incorrect password");

}

}
//Part 6
var hour=window.prompt("Please enter your time");
if (hour < 18) 
{
greeting = "Good day";
document.write(greeting);
}
else
{
greeting = "Good evening";
document.write(greeting);
}


//Part 7
var time=window.prompt("Please enter time in format 0000");
if(time >= 0000 && time < 1200)
{
document.write("Good morning!");

}

else
{

if( time >= 1200 && time <1700 )
{

    document.write("Good afternoon!");

}

else
{

if(time >=1700 && time <2100)
{

    document.write("Good Evening!");

}
else
{

if(time >=2100 && time <=2359)
{

    document.write("Good night!");
}

} 
}
}
//Chapter 14-16

//Part 1
var student=window.prompt("Please enter student name");
student[0]=student;
document.write(student);

//Part 2
var student=window.prompt("Please enter student name");
student[0]=student;
document.write(student);


//Part 3
var array=window.prompt("Please enter any String data");
array[0]=array;
array[1]=array;
document.write(array);


//Part 4
var array=window.prompt("Please enter any number");
array[0]=array;
array[1]=array;
document.write(array);



//Part 5
var myArr = [];
var value = 2;
for(var i = 0; i < value; i++) 

{
    myArr[i]=window.prompt("Please enter the Boolean character");
 }
 document.write(myArr);
 


//Part 6
var mixedArray=[];
var length=window.prompt("Please enter the range of Array only number");
var i;
for(i=0; i<length; i++)
{

mixedArray[i]=window.prompt("Please enter mixed character number and strings");

}
document.write(mixedArray);


//Part 7
var array=[];
var size=8;
document.write("Qualifications: " +"<br>");
for(var i=0; i<size; i++ ) 

{
	
	//Taking Input from user
    array[i ] =window.prompt("Please enter element"  );
    
    document.write(array[i] +"<br>" );
    
} 


//Part 8
var array=[];
var number=[];
var total=500;
var i; 
var value =window.prompt("Enter vlaue of array");
var Value=value;
for(i=0; i<Value; i++)
{

array[i] = window.prompt("Please enter the student name ");
number[i]=window.prompt("Please enter score of students");
document.write(" Score of " +array[i] +" is " +number[i] + " .Percentage: " +number[i]/total*100 +"%" +"<br>");
}


//Part 9
var colour=[];
var Colour=[];
var length=window.prompt("Please enter the length of array only number");
var Length=length;
var i;
for(i=0; i<Length; i++)
{

colour[i]= window.prompt("Please enter colour names ");
document.write(colour[i] +"\n" )
}
window.prompt("Please Enter the colour you want to add to the beginning ");


//Part 10
var value=window.prompt("Please enter value of array");
var score=[];
var Score=[];
var i;
var Value=value;
document.write("Score of Students: " );

for(i=0; i<Value; i++)

{

score[i]=window.prompt("Please enter the Score of students");
document.write( +score[i] +",");

}
document.write("Ordered Scores of Students" +"<br>");

for(i=0; i<Value; i++)
{

    Score=score.sort(function(a,b)
{

    return a-b
}

);

document.write( +Score[i] +"," )
}




//Part 11
var list=[];
var selected=[];
var i;
var length;
length = window.prompt("Please enter the range of array");
var Length =length;
document.write("Cities list:" +"<br>");

for(i =0; i<Length; i++)
{

list[i]=window.prompt("Please enter the city lists")
document.write(list[i] +",");

}

document.write("Selected cities list:" +"<br>");
for(i =0; i<Length; i++)
{

selected.slice[i]=window.prompt("Please enter the city to show ")
document.write(selected.slice[i] +",");

}



//Part 12
var arr = ["This", "is" , "my" , "cat"];
document.write("Arrays:"  +"<br>");
document.write(arr +"<br>");
var i;
document.write("String:" +"<br>");
for(i=0; i<arr.length; i++)
{
arr[i]=document.write( arr[i ] +" " );
}



//Part 13
var array=[];
var i;
var length=window.prompt("Please enter the length of array");
var Length=length;
document.write("Devices: " +"<br>");
for(i=0; i<Length;i++)
{

array[i]=window.prompt("Please enter data");
document.write(array[i] +",");

}
for(i=0; i<Length;i++)
{

document.write( "Out: " +"<br>" +array[i] );

}



//Part 14
var array=[];
var i;
var length=window.prompt("Please enter the length of array");
var Length=length;
var LENGTH=Length-1
document.write("Devices: " +"<br>");
for(i=0; i<Length;i++)
{

array[i]=window.prompt("Please enter data");
document.write(array[i] +",");

}
for(i=LENGTH; i>=0;i--)
{

document.write( "Out: " +"<br>" +array[i] +"<br>" );

}

//Part 15
var mobile=["Apple","Samsung", "Motorola", "Nokia" ,"Sony" , "Haier"]
document.write("<select>");
var i;
for(i=0; i<mobile.length; i++)
{

document.write("<option>"+ mobile[i]  +"</option>")

}
document.write("</select>");


//chapter17-20
//part1.
var arr=[[0,0,0],[0,0,0]]

// part2

var arr1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

for(i=0;i<arr1.length;i++){
    for(j=0;j<arr1[i].length;j++){
        document.write(arr1[i][j]);
    }
    document.write("<br>")
}

// part3

arr2=[1,2,3,4,5,6,7,8,9,10]

for(var i=0;i<10;i++){
    document.write(arr2[i]);
    document.write("<br>")
}

// part4

var no=prompt("enter number for table");
var len=prompt("enter the lenght of table");

for(i=1;i<=len;i++){
    document.write(no+"*"+i+"="+no*i);
    document.write("<br>");
}

// part5

arr3=['apple','strawberry','orange','banana','mango']

for(i=0;i<arr3.length;i++){
    document.write(arr3[i]);
    document.write("<br>");
}
for(i=0;i<arr3.length;i++){
    document.write("Element at "+ i +" is "+arr3[i]);
    document.write("<br>");
}

// part6

for(var i=1;i<=10;i++){
    document.write(i+",")   //counting
}
document.write("<br>");
for(var i=10;i>0;i--){              //reverse counting
    document.write(i+",")
}
document.write("<br>");
for(var i=0;i<=20;i=i+2){       //even counting 
    document.write(i+",")
}   
document.write("<br>");
for(i=1;i<20;i=i+2){
    document.write(i+",")        //odd counting 
}
document.write("<br>");
for(var i=2;i<=20;i=i+2){       //series counting 
    document.write(i+"k"+" ,")
}  

// part7

var A=['cake','applepie','cookie','chips','patties']
search=prompt("enter the element to search")


for(i=0;i<A.length;i++){
    if(search===A[i]){
        document.write(search+" is available at index "+ i +"in bakery")
        var flag="yes";
    }
}
if(flag!="yes"){
    document.write(search +" is not available")
}

// part8

var A=[24,101,53,78,100,12]

for(i=0;i<A.length-1;i++){
    if(A[i]>A[i+1]){
        A[i+1]=A[i];
    }
}
var len=A.length
document.write(A[len-1]+" is largest in array")

// part9

var A=[24,53,78,91,12]
for(i=0;i<A.length-1;i++){
    if(A[i]<A[i+1]){
        A[i+1]=A[i];
    }
}
var len=A.length
document.write(A[len-1]+" is smallest in array")

// part10

for(var i=1;i<=100;i++){
    if(i%5==0){
    document.write(i+",")
}
}