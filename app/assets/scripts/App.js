import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import "./modules/MusicMenu";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".music"), "85%");
// new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
// var musicMenu = new MusicMenu();
