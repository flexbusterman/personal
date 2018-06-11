// regular ES5 constructor function
// function Person(fullName, favColor) {
// 	this.name = fullName
// 	this.favoriteColor = favColor
// 	this.greet = function() {
// 		console.log("Hello! My name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
// 	}
// }

// ES6 class syntax
class Person {
	constructor(fullName, favColor) {
		this.name = fullName
		this.favoriteColor = favColor
	}

	greet() {
		console.log("Hi there! My name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
	}
}

// returns this
// module.exports = Person

// ES6 native export
export default Person