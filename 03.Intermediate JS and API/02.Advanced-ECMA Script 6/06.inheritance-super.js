//***//inheritance and super:
class Mobile {
    constructor(brand, model, color, price) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.price = price;
    }
    
    getDetails() {
      return `${this.brand} ${this.model} (${this.color}) - $${this.price}`;
    }
  }

//inheritance: ইনহেরিটেন্স হল একটি ক্লাস থেকে বৈশিষ্ট্য (প্রপার্টি এবং মেথড) উত্তরাধিকারসূত্রে প্রাপ্ত করা।
class SmartPhone extends Mobile {
    constructor(brand, model, color, price, os) {
      //super: super কীওয়ার্ড প্যারেন্ট ক্লাসের কনস্ট্রাক্টর এবং মেথডগুলিকে কল করতে ব্যবহৃত হয়।
      super(brand, model, color, price);
      this.os = os;
    }
  
    getDetails() {
      return `${super.getDetails()} - ${this.os}`;
    }
}
const phone2 = new SmartPhone('Samsung', 'Galaxy S21', 'Black', 799, 'Android');
console.log(phone2.getDetails()); //output: Samsung Galaxy S21 (Black) - $799 - Android


  
  