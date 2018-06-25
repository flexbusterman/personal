import $ from 'jquery';

var photoCred = {};
photoCred.augustin = ["Ulrika Lindell", "#fff"];
photoCred.chicagojazzen = ["Andréas Brännström","#000"];
photoCred.dammit = ["John Arthur","#000"];
photoCred.flickstick = ["Namoo Kim","#fff"];
photoCred.kantor = ["Kantor","#fff"];
photoCred.krispr = ["Malin Strömberg","#fff"];
photoCred.riwen = ["Henrik Wiklund","#fff"];
photoCred.therese = ["Selma Grönlund","#fff"];

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

		// update photoCred cred text
		$("div.photo-cred").html("Photo: "+photoCred[currentLinkTxt[0]][0]);

		$("div.photo-cred").css("color", photoCred[currentLinkTxt[0]][1]);
		// update photoCred color
		// $("div.photo-cred").css.("color", photoCred[currentLinkTxt[0]][1]);
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