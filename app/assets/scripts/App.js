import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import "./modules/MusicMenu";
import "./modules/Code";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".intro__sign"), "50%");
new RevealOnScroll($(".code"), "85%");
new RevealOnScroll($(".music-links"), "85%");
// new RevealOnScroll($(".discography-reveal-trigger"), "85%");
new RevealOnScroll($(".about-reveal-trigger"), "85%");

var stickyHeader = new StickyHeader();
var modal = new Modal();
// var musicMenu = new MusicMenu();
