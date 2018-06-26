import $ from 'jquery';

var photoCred = {};
photoCred.augustin = ["Ulrika Lindell", "#fff"];
photoCred.krispr = ["Malin Strömberg","#fff"];

$(function() {
	var textContainers = $("div.music-text-row");
	var images = $('div.music').children('img');
	var musicLinks = $('a.link')
	var currentLinkIndex;

	var codeLinks = $('a.code-link').click(function() {
		
		var currentLinkTxt = $(this).text().toLowerCase().split(" ");

		// TODO: This shouldn't be hard coded
		if (currentLinkTxt == "augustin") {
			currentLinkIndex = 0;
		}

		if (currentLinkTxt == "krispr") {
			currentLinkIndex = 5;
		}
	
		// update link classes
		musicLinks.removeClass('link-active');
		$(musicLinks[currentLinkIndex]).addClass('link-active');
		
		// update music text rows classes
		textContainers.removeClass("row--visible")
		textContainers.addClass("row--hidden")
		$(textContainers[currentLinkIndex]).removeClass("row--hidden")
		$(textContainers[currentLinkIndex]).addClass("row--visible")

		// console.log(musicLinks[0]);

		// update images classes
		images.removeClass("music__images-opaque")
		$(images[currentLinkIndex]).addClass("music__images-opaque");

		$("div.photo-cred").html("Photo: "+photoCred[currentLinkTxt[0]][0]);
		$("div.photo-cred").css("color", photoCred[currentLinkTxt[0]][1]);

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