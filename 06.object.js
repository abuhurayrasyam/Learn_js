/*Some Objects Methods :
--To see a object property/keys value use: console.log(objectName.property); / console.log(objectName["property"]);
--To add a property and value in a object use: objectName.property = value; / objectName[property] = value; 
--To see objects all keys use: console.log(object.keys(objectName));
--To see objects all values use: console.log(object.values(objectName));
--To delete a property use: delete objectName.propertyName;
--To access a object using for in use:
    for(const name in objectName){
        console.log(name);
    }
*/

//Task-1 : Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);

//Task-2: For this object below add a property named passenger capacity with value 5.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car);
car["passenger capacity"] = 5;
console.log(car);

//Task-3 : Display the physics marks as output.
const student01 = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student01.physics.marks);

//Task-4 : Count the number of properties.
let student02 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student02).length);

//Task-5 : Loop through an object and print the key-value pairs with their types.
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for (let key in myObject){
    console.log("Key:", key, "|", typeof(myObject));
}

