import $ from "jquery"
import MobileMenu from "./modules/MobileMenu.js"
import RevealOnScroll from "./modules/RevealOnScroll.js"
import StickyHeader from "./modules/StickyHeader.js"
import Modal from "./modules/Modal.js"

var mobileMenu = new MobileMenu()
var stickyHeader = new StickyHeader()
var modal = new Modal()

new RevealOnScroll($(".feature-item"), "85%")
new RevealOnScroll($(".testimonial"), "60%")


// var $ = require("jquery")

// // ES5 import
// // require don't need .js extension, but chose to include it to make it easier to understand what's going on
// // var Person = require("./modules/Person.js")

// // ES6 import
// import Person from "./modules/Person"

// // inheritance in ES6 classes
// class Adult extends Person {
// 	payTaxes() {
// 		console.log(this.name + " now owes 0SEK in taxes.")
// 	}
// }

// var john = new Person("John Doe", "blue")
// john.greet()

// var jane = new Adult("Jane Smith", "orange")
// jane.greet()
// jane.payTaxes()

// $("h1").remove()