//***//লুপ (Loop) : loop হল একটি কন্ট্রোল স্ট্রাকচার যা কোড ব্লক একাধিকবার চালানোর জন্য ব্যবহৃত হয়। জাভাস্ক্রিপ্টে সাধারণ লুপগুলি হল for, while, এবং do...while লুপ।

/* for-loop :
for (initialization; condition; increment/decrement){
    body of the loop;
} */
//Task-01 : "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
for (let i = 1; i <= 60; i++){
    console.log(i, "I will invest at least 6 hrs every single day for next 60 days!");
}

//Task-02 :
//Subtask-1:- Find all the odd num1s from 61 to 100.
for (let i = 61; i <= 100; i++){
    if (i % 2 !==0){
        console.log(i);
    }
}
//Subtask-2:- Find all the even num1s from 78 to 98.
for (let i = 78; i <= 98; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

//Task-03 :
//Subtask-1:- Display sum of all the odd num1s from 91 to 129.
let sum1 = 0;
for (let i = 91; i <= 129; i++){
    if (i % 2 !==0){
        sum1 += i;
    }
}
console.log(sum1);
//Subtask-2:- Display sum of all the even num1s from 51 to 85.
let sum2 =0;
for (let i = 51; i <= 85; i++){
    if (i %  2 ==0){
        sum2 += i;
    }
}
console.log(sum2);

//Task-04 : Generate a multiplication table for number 9.
const num1 = 9;
for (let i = 1; i <= 10; i++){
    console.log(num1, "x", i, "=", num1*i);
}

//Task-05 : Implement a countdown timer that counts down from 81 to 65.
for (let i = 81; i >= 65; i--){
    console.log(i);
}

/* while-loop :
initialization;
while (condition){
    body of the loop;
    increment/decrement;
} */
//Task-01 : "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
let h = 0;
while (h <= 60){
    console.log(h, "I will invest at least 6 hrs every single day for next 60 days!");
    h++;
}

//Task-02 :
//Subtask-1:- Find all the odd num1s from 61 to 100.
let i = 61;
while (i <= 100){
    if(i % 2 !==0){
        console.log(i);
    }
    i++;
}
//Subtask-2:- Find all the even num1s from 78 to 98.
let j = 78;
while (j <= 98){
    if(j % 2 ==0){
        console.log(j);
    }
    j++;
}

//Task-03 :
//Subtask-1:- Display sum of all the odd num1s from 81 to 131.
let sum3 = 0;
let k = 81;
while (k <= 131){
    if (k % 2 !== 0){
        sum3 += k;
    }
    k++;
}
console.log(sum3);
//Subtask-2:- Display sum of all the even num1s from 206 to 311.
let sum4 = 0;
let l = 206;
while (l <= 311){
    if (l % 2 == 0){
        sum4 += l;
    }
    l++;
}
console.log(sum4);

//Task-04 : As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for num1 5.
const num2 = 5;
let m = 1;
while (m <=10 ){
    console.log(num2, "x", m, "=", num2*m);
    m++;
}
//Task-05 : Implement a countdown timer that counts down from 21 to 15.
let n = 21;
while (n >= 15){
    console.log(n);
    n--;
}


/* continue : */
//Task-01 : Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for (let i = 1; i <= 40; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i);
}

//Task-02 : Display odd number from 55 to 85 and skip the numbers divisible by 5.
for (let i = 55; i <= 85; i ++){
    if (i % 2 !== 0){
        if( i % 5 == 0 ){
            continue;
        }
        console.log(i);
    }
}


/* break : */
//Task-01 : Write a loop 1 to 200. Use break to exit the loop once you find 100.
for (let i = 1; i <= 200; i++){
    if (i == 100){
        break;
    }
    console.log(i);
}

//Task-02 : Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100.
let sum5 = 0;
let o = 1;
while (true){
    sum5 += o;
    if(sum5 >= 100){
        break;
    }
    o++;
}
console.log(sum5);
console.log(o);

//Task-03 : Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)