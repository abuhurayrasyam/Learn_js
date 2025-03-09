//***// if else and switch case :
// if else : if else স্টেটমেন্ট শর্তানুযায়ী কোড ব্লকগুলি চালানোর জন্য ব্যবহৃত হয়। যদি শর্তটি সত্য হয়, তাহলে if ব্লকের কোড চালানো হয়, অন্যথায় else ব্লকের কোড চালানো হয়।
//switch case : switch case স্টেটমেন্ট একটি একক ভেরিয়েবলের মান বিভিন্ন ক্ষেত্রের সঙ্গে তুলনা করার জন্য ব্যবহৃত হয় এবং সংশ্লিষ্ট কোড ব্লকটি চালায়, এবং এটি ক্যামেল কেসে ডিক্লার করা হয়।

/***
Task-01 : Free Drinks (Using if-else)
    - Burger more than 500tk: free Coke.
    - Else Coke: 30tk.
*/
let burgerPrice = 501;
if(burgerPrice>500){
    console.log("Coke is free for you");
}
else{
    console.log("Coke Price is 30tk");
}

/***
Task-02 : BMI Calculator and Health Category (Using if-else)
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2.
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
let weight = 79; // in kg
let height = 6; // in feet
let heightInM = height * 0.3048;
let BMI = weight / (heightInM * heightInM);
if(BMI<18.5){
    console.log("You are underweight");
}
else if(BMI<=24.9){
    console.log("You are normal");
}
else if(BMI<=29.9){
    console.log("You are overweight");
}
else{
    console.log("You are Obese")
}


/***
Task-03 : Grade Calculator (Using switch-case)
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
*/
let mark = 1000;
switch(true){
    case(mark>=90 && mark<=100):
        console.log("A");
    break;
    case(mark>=80 && mark<90):
        console.log("B");
    break;
    case(mark>=70 && mark<80):
        console.log("C");
    break;
    case(mark>=60 && mark<70):
        console.log("D");
    break;
    case(mark>=0 && mark<60):
        console.log("F");
    break;
    default:
        console.log("Invalid mark");
}

/***
Task-04 : (Using nested if-else)
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend.
if you get less than 80 go to home and sleep and act sad.
*/
let yourScore = 81;
let friendScore = 81;
if(yourScore>80){
    if(friendScore>80){
        console.log("Go for a lunch");
    }
    else if(friendScore>=60){
        console.log("Good luck next time");
    }
    else if(friendScore>=40){
        console.log("Friends message unseen");
    }
    else{
        console.log("Block your friend");
    }
}
else{
    console.log("Go to home and sleep and act said");
}

/***
Task-05 : Ticket fare Calculator (Using nested if-else)
    - Children (age < 10): free.
    - Students get a 50% discount.
    - Senior citizens (age >= 60) gets a 15% Discount.
    - Otherwise Regular ticket fare 800 tk.
*/
let age = 21;
let student = false;
if(student){
    console.log("You got 50% discount");
}
else{
    if(age<10){
        console.log("Your ticket is free");
    }
    else if(age>=60){
        console.log("You got 15% discount");
    }
    else{
        console.log("You give the full fare of Ticket");
    }
}

/***
Task-06 : (Using ternary operator / short hand if-else)
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
 */
let num1 = 10;
let num2 = 15;
let result = num1 > num2 ? "Num1 is Big" : "Num2 is Big";
console.log(result);