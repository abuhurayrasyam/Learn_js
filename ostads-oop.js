//Class and Object
class Person01{
    firstName = "Abu";
    lastName = "Hurayra"
}
let obj01 = new Person01();
console.log(obj01.firstName);
console.log(obj01.lastName);
console.log("---------------");

//Constructor
class Person02{
    constructor(){
        this.firstName = "Abu";
        this.lastName = "Hurayra"
        console.log(this.firstName.concat(" ").concat(this.lastName));
    }
}
new Person02();
console.log("---------------");

//Static Keyword
class Person03{
    static firstName = "Abu";
    static lastName = "Hurayra"
}
console.log(Person03.firstName);
console.log(Person03.lastName);
console.log("---------------");

//Inheritance
class Father01{
    firstName = "Abu";
    lastName = "Hurayra"
}
class Son01 extends Father01{
    nickName = "Syam"
}
let obj02 = new Son01();
console.log(obj02.firstName);
console.log(obj02.lastName);
console.log(obj02.nickName);
console.log("---------------");

let obj03 = new Father01();
console.log(obj03.firstName);
console.log(obj03.lastName);
console.log(obj03.nickName); //undefined
console.log("---------------");

//Overriding
class Father02{
    firstName = "Abu";
    lastName = "Hurayra"
    getName(){
        console.log(this.firstName.concat(" ").concat(this.lastName));
    }
}
class Son02 extends Father02{
    getName(){
        console.log("Syam");
    }
}
let obj04 = new Son02();
obj04.getName(); //Output: Syam
console.log("---------------");

let obj05 = new Father02();
obj05.getName(); //Output: Abu Hurayra
console.log("---------------");

