//***//encapsulation : এনক্যাপসুলেশন হল ডেটা এবং মেথডগুলিকে একটি ইউনিট হিসেবে প্যাকেজ করা যা এক্সটারনাল অ্যাক্সেস থেকে সুরক্ষিত থাকে।
class Mobile {
  #price;
  constructor(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.#price = price;
  }

  getDetails() {
    return `${this.brand} ${this.model} (${this.color}) - $${this.price}`;
  }

  getPrice() {
    return `$${this.#price}`;
  }
}

const phone4 = new Mobile('Nokia', '3310', 'Blue', 50);
console.log(phone4.getDetails()); //output: Nokia 3310 (Blue) - $undefined

const phone5 = new Mobile('Nokia', '3310', 'Blue', 50);
console.log(phone5.getPrice()); //output: $50