import $ from "jquery"
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints"

class RevealOnScroll {
	constructor(elements, offset) {
		this.itemsToReveal = elements
		this.offsetPercentage = offset
		this.hideInitially()
		this.createWaypoints()
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item")
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible")
				},
				// by default the handler function gets called when the waypoint reaches the top of the screen
				// in this context "this" refers to a waypoint by default, not instance of class
				offset: that.offsetPercentage
			})
		})
	}
}

export default RevealOnScroll