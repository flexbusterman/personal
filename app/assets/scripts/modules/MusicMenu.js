import $ from 'jquery';

$(function() {
	var textContainers = $("div.music-text-row");
	var images = $('div.music').children('img');
	var links = $('a.link').click(function() {
		
		var currentLinkTxt = $(this).text().toLowerCase().split(" ");
		var currentLinkIndex = $('a.link').index(this)
	
		// update link classes
		links.removeClass('link-active');
		$(this).addClass('link-active');
		
		// update music text rows classes
		textContainers.removeClass("row--visible")
		textContainers.addClass("row--hidden")
		$(textContainers[currentLinkIndex]).removeClass("row--hidden")
		$(textContainers[currentLinkIndex]).addClass("row--visible")

		// console.log(images[currentLinkIndex])

		// update images classes
		images.removeClass("music__images-opaque")
		$(images[currentLinkIndex]).addClass("music__images-opaque");

   });
});

// $(function() {
//    $('#attach_box').click(function() {
//    $('#sec_box').show();
//        return false;
//    });        
// });

// should be added to image when link clicked
// __images-opaque