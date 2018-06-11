import $ from "jquery"

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal")
		this.modal = $(".modal")
		this.closeModalButton = $(".modal__close")
		this.events()
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this))

		// clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this))

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this))
	}

	keyPressHandler(e) {
		// if escape key is pressed
		if (e.keyCode == 27) {
			this.closeModal()
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible")
		// browser scrolls to top of page by default when user clicks on link that points to #, and return false in this function deactivates that behavior
		return false
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible")
	}
}

export default Modal