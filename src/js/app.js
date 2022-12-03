import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
const burgerHeader = document.querySelector(".header__burger");
if (burgerHeader) {
	const buttonHeader = document.querySelector(".header__button")
	const menuHeader = document.querySelector(".menu__body");
	burgerHeader.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		burgerHeader.classList.toggle("_active");
		menuHeader.classList.toggle("_active");
		buttonHeader.classList.toggle("_active");
	});
}