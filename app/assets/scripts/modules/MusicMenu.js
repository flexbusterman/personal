import $ from 'jquery';

var content = {};
var bands = {};

// bands.augustin = ;

content.chicagojazzen = 'Chicagojazzen is basically the multifaceted Erik Karlsson. Based in Skellefteå, he has released no less than eight albums since 2006 - digitally, on tape and on disc, on underground labels like Zeon Light, Periferin and Irrlicht. It all began with Erik getting an USB-microphone as Christmas gift. Since then, he has refused to relate to any genre boundaries in his multi-instrumental music creation. As a red thread we find instead a messy, brutal DIY-spirit combined with references to Västerbotten.<br>Today, Chicagojazzen has evolved into a loosely cohesive collective, and among his references, Karlsson mentions Arvo Pärt, Wu Tang Clan, Fela Kuti and Darkthrone.<br><br><a href="https://www.facebook.com/chicagojazzen/" target="_blank">Facebook</a><br><a href="https://soundcloud.com/chicagojazzen" target="_blank">SoundCloud</a><br><a href="http://c-h-i-c-a-g-o-j-a-z-z-e-n.blogspot.com" target="_blank">BlogSpot</a>';

$(function() {
	// var textContainers = $("music-text-row");
	var textContainers = $("div.generic-content-container");
	var links = $('a.link').click(function() {
		
		var currentLinkTxt = $(this).text().toLowerCase().split(" ");
		var currentLinkIndex = $('a.link').index(this)
		
		links.removeClass('link-active');
		textContainers.removeClass("generic-content-container--visible")
		textContainers.addClass("generic-content-container--hidden")
		$(textContainers[currentLinkIndex]).removeClass("generic-content-container--hidden")
		$(textContainers[currentLinkIndex]).addClass("generic-content-container--visible")
		$(this).addClass('link-active');
		console.log(textContainers[currentLinkIndex])
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