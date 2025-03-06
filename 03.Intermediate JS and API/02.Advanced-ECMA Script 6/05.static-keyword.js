//***//static keyword : static কীওয়ার্ড একটি মেথডকে ক্লাসের ইনস্ট্যান্স ছাড়াই কল করতে দেয়। এটি মেথডকে ক্লাসের প্রোটোটাইপ থেকে সরিয়ে দেয় এবং সরাসরি ক্লাসে যোগ করে।
class Person03{
    static firstName = "Abu";
    static lastName = "Hurayra"
}
console.log(Person03.firstName); //output: Abu
console.log(Person03.lastName);//output: Hurayra