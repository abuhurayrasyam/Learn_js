//***//prototype inheritance and prototype chain :
//prototype inheritance: প্রোটোটাইপ ইনহেরিটেন্স হল জাভাস্ক্রিপ্টের একটি প্রক্রিয়া যেখানে অবজেক্ট একটি প্রোটোটাইপ থেকে প্রপার্টি এবং মেথড উত্তরাধিকারসূত্রে পায়।
function Mobile(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
}
Mobile.prototype.getDetails = function() {
    return `${this.brand} ${this.model} (${this.color}) - $${this.price}`;
};
const phone3 = new Mobile('Apple', 'iPhone 13', 'White', 999);
console.log(phone3.getDetails()); //output: Apple iPhone 13 (White) - $999

//prototype chain: প্রোটোটাইপ চেইন হল একটি চেইন যেখানে অবজেক্ট প্রোটোটাইপ থেকে প্রপার্টি এবং মেথড খুঁজে পায়।
console.log(phone3.__proto__); // Mobile প্রোটোটাইপকে নির্দেশ করে
console.log(phone3.__proto__.__proto__); // Object প্রোটোটাইপকে নির্দেশ করে
