const person = {
    name: 'Abu Hurayra',
    age: 21,
    friends: ["Mahadi", "Joynal"],
    isMarried: false
}
console.log(person); 
// {name: 'Abu Hurayra', age: 21, friends: Array(2), isMarried: false}

const newPerson = JSON.stringify(person);
console.log(newPerson);
// {"name":"Abu Hurayra","age":21,"friends":["Mahadi","Joynal"],"isMarried":false}

const anotherNewPerson = JSON.parse(newPerson);
console.log(anotherNewPerson);
// {name: 'Abu Hurayra', age: 21, friends: Array(2), isMarried: false}