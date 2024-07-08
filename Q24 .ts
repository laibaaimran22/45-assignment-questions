let car : string = 'subaru';
let age : number = 25;
let numbers : number[] = [1, 2, 3, 4];
// test 1
console.log("Is car == 'Subaru'? I predict true.");
console.log(car === 'Subaru'); //true
// test 2
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru'); //false
// test 3
console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'Toyota'); //true
// test 4
console.log("Is car !== 'Subaru'? I predict false");
console.log(car !== 'Subaru'); //false
// test 5
console.log("Is carstoLowerCase() == 'Subaru'? I predict TRUE.");
console.log(car.toLowerCase() == 'Subaru'); //true
// test 6
console.log("Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());
// test 7
console.log("Is age == 25? I predict true.");
console.log(age==25); //true
// test 8
console.log("Is age != 30? I predict true.");
console.log(age!=30); //true
// test 9
console.log("Is age > 30? I predict false.");
console.log(age > 30); //false
// test 10
console.log("Is age <= 25? I predict true.");
console.log(age <= 25); //true
// test 11
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30); //true
// test 12
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); //false
// test 13
console.log("Is 3 in numbers? I predict tue.");
console.log(3 in numbers);
// test 14
console.log("Is 5 not in numbers? I predict true.");
console.log(5 in numbers);

