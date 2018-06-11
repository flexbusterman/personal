import $ from "jquery"

class MobileMenu {
	constructor () {
		this.siteHeader = $(".site-header")
		this.menuIcon = $(".site-header__menu-icon")
		this.menuContent = $(".site-header__menu-content")
		// adds listener when instatiated
		this.events()
	}

	// can be named anything
	events() {
		// bind this so that the content doesn't change (ie to the DOM element(default behaviour)) when we click
		this.menuIcon.click(this.toggleTheMenu.bind(this))
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible")
		this.siteHeader.toggleClass("site-header--is-expanded")
		this.menuIcon.toggleClass("site-header__menu-icon--close-x")
	}
}

export default MobileMenu