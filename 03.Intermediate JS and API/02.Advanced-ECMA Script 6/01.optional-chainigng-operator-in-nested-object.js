//***//optional chaining operator ? in object nesting : কোন nested অবজেক্টে যদি কোন প্রোপার্টি মিসিং থাকে তাহলে optional chaining operator ব্যবহারের ফলে আউটপুটে কোন error রিটার্ন না করে undefined রিটার্ন করবে।
const person01 = {
    name: "Abu",
    address: {
        city: "Tangail"
    }
}
console.log(person01.address.city); //output: Tangail
//অপশনাল চেনিং ছাড়া
console.log(person01?.address?.home); //output: undefined
//যখন প্রপার্টি বিদ্যমান নয়