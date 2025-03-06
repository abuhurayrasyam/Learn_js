//***//class, object & constructor, this keyword :
// class: ক্লাস হল একটি ব্লুপ্রিন্ট যা অবজেক্ট তৈরি করার জন্য ব্যবহৃত হয়। এটি প্রপার্টি এবং মেথড ধারণ করে। এবং এটি প্যাসকেল কেস ডিক্লার করা হয়।
class Mobile {
    //constructor: কনস্ট্রাক্টর হল একটি বিশেষ মেথড যা একটি নতুন অবজেক্ট তৈরি করার সময় কল হয়। এটি প্রপার্টি গুলো ইনিশিয়ালাইজ করে। অর্থাৎ এই মেথডের মধ্যে প্যারামিটার সংযোজন করে নতুন অবজেক্টের মাধ্যমে আর্গুমেন্ট পাস করা যায়।
    constructor(brand, model, color, price) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.price = price;
    }
    
    //this: this কীওয়ার্ড বর্তমান অবজেক্টটিকে নির্দেশ করে। এটি ক্লাসের প্রপার্টি এবং মেথডগুলিতে অ্যাক্সেস করে।
    getDetails() {
      return `${this.brand} ${this.model} (${this.color}) - $${this.price}`;
    }
  }
  
//object: অবজেক্ট হল একটি নির্দিষ্ট উদাহরণ যা ক্লাস থেকে তৈরি হয়। এটি প্রপার্টি এবং মেথড ধারণ করে।
const phone1 = new Mobile('Nokia', '3310', 'Blue', 50);
console.log(phone1.getDetails()); //output: Nokia 3310 (Blue) - $50
