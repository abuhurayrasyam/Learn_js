//***//bracket notation [" "] : ব্র্যাকেট নোটেশন ব্যবহার এর মাধ্যমে নিরাপদে প্রপার্টি অ্যাক্সেস করা যায়।
const person02 = {
    name: "Abu",
    address: {
        city: "Tangail"
    }
}
console.log(person02?.["address"]?.["city"]); //output: Tangail
//অপশনাল চেনিং অপারেটর এর ব্যবহারের ক্ষেত্রে ডট এবং ব্রাকেট নোটেশন উভয়ই ব্যবহার করতে হয়।
console.log(person02["address"]["city"]); //ouput: Tangail
//এছাড়া শুধুমাত্র ব্র্যাকেট নোটেশন ব্যবহার করা যায়।