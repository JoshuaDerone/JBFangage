$(document).ready(function() {

	function closeMenu() {
		document.getElementById("main-page-content-mask").style.pointerEvents = "none";
		document.getElementById("main-page-content-mask").style.opacity = "0.0";
		document.getElementById("main-menu").style.left = "-301px";
	}
	document.getElementById ("close-sidebar-button").addEventListener("click", closeMenu, false);

	function openMenu() {
		document.getElementById("main-page-content-mask").style.pointerEvents = "all";
		document.getElementById("main-page-content-mask").style.opacity = "0.6";
		document.getElementById("main-menu").style.left = "0px";
	}
	document.getElementById("open-sidebar-button").addEventListener("click", openMenu, false);

});
