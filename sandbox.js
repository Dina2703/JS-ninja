// alert('hello');
// console.log(1);
console.log('hello, world');
let email = 'example@mail.com';
console.log(email);

// string concatenation 
let firstName = "Sam";
let secondName = "Sanderson";
let fullName = firstName + ' '+ secondName;
console.log(fullName);

// to get a single character from a particular position using a [] notation on a  string
console.log(fullName[0]);
console.log(secondName[2]);

// string lenght
console.log(fullName.length);

// string methods (with dot notation and curly braces).
// these methods below DO NOT alter(change) the original value that we used them on.
console.log(fullName.toLocaleUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

//finding an index of a character
let index = email.indexOf('@');
console.log(index);