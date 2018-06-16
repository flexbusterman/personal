import $ from 'jquery';

var content = {};
content.augustin = 'Electronic solo project. Mainly SuperCollider and Ableton Live.<br><br><a href="https://soundcloud.com/augustinmusic" target="_blank">SoundCloud</a>';
content.chicagojazzen = "chicagojazzen filler text";

$(function() {
   var links = $('a.link').click(function() {
   		var txt = $(this).text().toLowerCase().split(" ")
       links.removeClass('link-active');
       $(this).addClass('link-active');
       $("p.music__text").html(content[txt[0]])
       console.log(txt[0])
   });
});

// should be added to image when link clicked
// __images-opaque