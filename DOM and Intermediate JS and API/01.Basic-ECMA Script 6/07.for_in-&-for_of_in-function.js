//***//for in and for of in function:
const person02 = {
    name: "Syam",
    age: "21",
    country: "BD"
}
for (let key in person02){
    console.log(`${key} : ${person02[key]}`);
} //for in

for (let [key, value] of Object.entries(person02)){
    console.log(`${key} : ${value}`);
} //for of


