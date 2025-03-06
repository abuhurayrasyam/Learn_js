//***//Overriding : মেথড ওভাররাইডিং প্যারেন্ট ক্লাসের মেথডকে সাবক্লাসে পুনরায় সংজ্ঞায়িত করার প্রক্রিয়া, যাতে সাবক্লাসের মেথডটি প্যারেন্ট ক্লাসের মেথডকে প্রতিস্থাপন করে।
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

let obj05 = new Father02();
obj05.getName(); //Output: Abu Hurayra